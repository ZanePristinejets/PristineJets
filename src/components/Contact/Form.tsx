"use client";

import { useState, useRef, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string; // optional
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

function onlyDigits(v: string) {
  return v.replace(/\D/g, "");
}
function formatUSPhone(v: string) {
  const d = onlyDigits(v).slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}
function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export default function Form() {
  const [fields, setFields] = useState<Fields>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  function validate(values: Fields): Errors {
    const e: Errors = {};
    if (!values.firstName || values.firstName.trim().length < 3) {
      e.firstName = "First name must be at least 3 characters.";
    }
    if (!values.lastName || values.lastName.trim().length < 3) {
      e.lastName = "Last name must be at least 3 characters.";
    }
    if (!values.email || !isValidEmail(values.email.trim())) {
      e.email = "Please enter a valid email.";
    }
    if (values.phone) {
      const digits = onlyDigits(values.phone);
      if (digits.length !== 10) {
        e.phone = "Please enter a valid phone number.";
      }
    }
    if (!values.message || values.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters.";
    } else if (values.message.length > 2000) {
      e.message = "Message cannot exceed 2000 characters.";
    }

    return e;
  }

  function setField<K extends keyof Fields>(k: K, v: string) {
    setFields((prev) => ({ ...prev, [k]: v }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const v = { ...fields };
    const eMap = validate(v);
    setErrors(eMap);

    if (Object.keys(eMap).length > 0) {
      setStatus("idle");
      // focus first invalid field without using 'any'
      const order: (keyof Fields)[] = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "message",
      ];
      const firstKey = order.find((k) => eMap[k]);
      if (firstKey && formRef.current) {
        const el = formRef.current.querySelector<HTMLElement>(
          `[name="${firstKey}"]`
        );
        el?.focus();
      }
      return;
    }

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          firstName: v.firstName,
          lastName: v.lastName,
          email: v.email,
          phone: v.phone,
          message: v.message,
          "bot-field": "",
          redirect: "/contact/success",
        }),
      });
      setStatus("ok");
      window.location.href = "/contact/success";
    } catch {
      setStatus("err");
    }
  }

  function errProps<K extends keyof Fields>(key: K) {
    const isErr = Boolean(errors[key]);
    return {
      "aria-invalid": isErr || undefined,
      "aria-describedby": isErr ? `${String(key)}-error` : undefined,
      className:
        "w-full bg-white border-gray-300 h-11 text-gray-700 placeholder:text-gray-500 text-base " +
        (isErr ? "border-red-500 ring-1 ring-red-400" : ""),
    } as const;
  }

  return (
    <div className="bg-gray-100 backdrop-blur-sm p-8 md:p-12 shadow-2xl max-w-2xl w-full mx-auto">
      <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[8px] text-gray-800 mb-6 text-center">
        GET IN TOUCH
      </h2>

      <form
        ref={formRef}
        name="contact"
        noValidate
        onSubmit={onSubmit}
        className="space-y-4 sm:space-y-5 w-full"
      >
        {/* Netlify hidden fields (kept in body as well) */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="redirect" value="/contact/success" />
        <p className="hidden">
          <label>
            Dont fill this out if youre human: <input name="bot-field" />
          </label>
        </p>

        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={fields.firstName}
              onChange={(e) => setField("firstName", e.target.value)}
              required
              {...errProps("firstName")}
            />
            {errors.firstName && (
              <p
                id="firstName-error"
                className="mt-1 text-[11px] pt-[1px] text-red-600"
              >
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="w-full">
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={fields.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              required
              {...errProps("lastName")}
            />
            {errors.lastName && (
              <p
                id="lastName-error"
                className="mt-1 text-[11px] pt-[1px] text-red-600"
              >
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          <div className="w-full">
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={fields.email}
              onChange={(e) => setField("email", e.target.value)}
              required
              {...errProps("email")}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-[11px] pt-[1px] text-red-600"
              >
                {errors.email}
              </p>
            )}
          </div>
          <div className="w-full">
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              value={fields.phone}
              onChange={(e) => setField("phone", formatUSPhone(e.target.value))}
              inputMode="tel"
              {...errProps("phone")}
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="mt-1 text-[11px] pt-[1px] text-red-600"
              >
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <Textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={fields.message}
            onChange={(e) => setField("message", e.target.value)}
            required
            className={
              "w-full bg-white border-gray-300 text-gray-700 placeholder:text-gray-500 resize-none text-base " +
              (errors.message ? "border-red-500 ring-1 ring-red-400" : "")
            }
            aria-invalid={Boolean(errors.message) || undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            maxLength={2000}
          />
          <div className="flex justify-between text-[11px] pt-[1px]">
            {errors.message ? (
              <p id="message-error" className="text-red-600">
                {errors.message}
              </p>
            ) : (
              <span className="text-gray-500 text-[11px] pt-[1px]">
                {fields.message.length}/2000
              </span>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-[#bd843b] hover:bg-[#a76c3b] disabled:opacity-60 disabled:cursor-not-allowed text-white w-full sm:w-auto px-7 py-2.5 h-auto text-sm tracking-[3px] transition-all duration-300"
          >
            {status === "submitting" ? "SENDING..." : "CONTACT US"}
          </button>
        </div>

        {status === "err" && (
          <p className="text-center text-red-600 text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
