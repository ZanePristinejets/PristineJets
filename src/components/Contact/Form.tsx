"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string; // optional
  dateOfService: string;
  airport: string;
  aircraftModel: string;
  tailNumber: string;
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

// Airports list shared between validation and UI rendering
const AIRPORT_OPTIONS = [
  "Bozeman Yellowstone International Airport KBZN",
  "Jackson Hole Airport, KJAC",
  "Glacier park international airport (Kalispell) KGPI",
  "Ennis - Big Sky Airport KEKS",
  "Missoula Montana Airport KMSO",
  "Billings Logan International Airport KBIL",
  "Bert Mooney Airport (Butte) KBTM",
  "Helena Regional Airport KHLN",
  "West Yellowstone Airport, KWYS",
  "Great Falls International Airport KGTF",
  "Mission Field Airport (KLVM)",
  "Gardiner Airport, 29S",
  "Threeforks Airport, 9S5",
  "Idaho Falls Regional Airport KIDA",
];

function splitAirportOption(s: string) {
  const mParen = s.match(/\(([A-Z0-9]{2,4})\)/);
  const mEnd = s.match(/([A-Z0-9]{2,4})$/);
  const code = mParen ? mParen[1] : mEnd ? mEnd[1] : "";
  let name = s;
  if (code) {
    name = name.replace(new RegExp(`\\s*${code}$`), "").trim();
  }
  name = name.replace(/,\s*$/, "");
  name = name.replace(/\s*\([A-Z0-9]{2,4}\)\s*$/, "");
  return { name, code };
}

export default function Form() {
  const [fields, setFields] = useState<Fields>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfService: "",
    airport: "",
    aircraftModel: "",
    tailNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err">(
    "idle",
  );
  const formRef = useRef<HTMLFormElement | null>(null);
  const [dateType, setDateType] = useState<"text" | "date">("text");
  const [airportOpen, setAirportOpen] = useState(false);
  const airportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (
        airportRef.current &&
        !airportRef.current.contains(e.target as Node)
      ) {
        setAirportOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

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
    // Airport (required)
    if (!values.airport || !AIRPORT_OPTIONS.includes(values.airport)) {
      e.airport = "Please select an airport.";
    }
    if (!values.aircraftModel || values.aircraftModel.trim().length < 2) {
      e.aircraftModel = "Aircraft model must be at least 2 characters.";
    }

    if (!values.tailNumber || values.tailNumber.trim().length < 2) {
      e.tailNumber = "Tail / registration number is required.";
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
        "airport",
        "dateOfService",
        "aircraftModel",
        "tailNumber",
        "phone",
        "message",
      ];
      const firstKey = order.find((k) => eMap[k]);
      if (firstKey && formRef.current) {
        const el = formRef.current.querySelector<HTMLElement>(
          `[name="${firstKey}"]`,
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
          dateOfService: v.dateOfService,
          airport: v.airport,
          aircraftModel: v.aircraftModel,
          tailNumber: v.tailNumber,
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

  function errProps<K extends keyof Fields>(key: K, extra?: string) {
    const isErr = Boolean(errors[key]);
    return {
      "aria-invalid": isErr || undefined,
      className:
        "w-full bg-white/25 border-gray-300 h-10 text-white placeholder:text-white text-sm " +
        (isErr ? "border-red-500 ring-1 ring-red-500" : "") +
        (extra ? ` ${extra}` : ""),
    } as const;
  }

  return (
    <div
      data-nosnippet
      className="bg-stone-500/45 backdrop-blur-[4px] p-6 md:p-8 shadow-2xl max-w-xl w-full mx-auto"
    >
      <form
        ref={formRef}
        name="contact"
        noValidate
        data-nosnippet
        onSubmit={onSubmit}
        className="space-y-3 sm:space-y-6 w-full"
      >
        <h2 className="font-serif text-xl lg:text-2xl font-bold tracking-[6px] text-white mb-4 text-center">
          GET IN TOUCH
        </h2>
        {/* Netlify hidden fields (kept in body as well) */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="redirect" value="/contact/success" />
        <p
          data-nosnippet
          hidden
          className="absolute w-[1px] h-[1px] padding-0 -m-[1px] overflow-hidden border-0"
        >
          <label data-nosnippet>
            {" "}
            <input
              name="bot-field"
              type="text"
              autoComplete="off"
              tabIndex={-1}
            />
          </label>
        </p>

        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
          <div className="w-full">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={fields.firstName}
              onChange={(e) => setField("firstName", e.target.value)}
              required
              {...errProps("firstName")}
            />
          </div>
          <div className="w-full">
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={fields.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              required
              {...errProps("lastName")}
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
          <div className="w-full">
            <Input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={fields.email}
              onChange={(e) => setField("email", e.target.value)}
              required
              {...errProps("email")}
            />
          </div>
          <div className="w-full">
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={fields.phone}
              onChange={(e) => setField("phone", formatUSPhone(e.target.value))}
              inputMode="tel"
              {...errProps("phone")}
            />
          </div>
        </div>

        {/* Airport (styled dropdown) */}
        <div className="w-full relative" ref={airportRef}>
          <input type="hidden" name="airport" value={fields.airport} />
          <button
            type="button"
            name="airport"
            aria-haspopup="listbox"
            aria-expanded={airportOpen}
            onClick={() => setAirportOpen((v) => !v)}
            className={
              "flex w-full justify-between items-center border px-3 h-10 bg-white/25 text-white text-sm transition-colors " +
              (errors.airport
                ? "border-red-500 ring-1 ring-red-500"
                : "border-gray-300")
            }
            aria-invalid={Boolean(errors.airport) || undefined}
          >
            <span className="truncate text-left">
              {fields.airport || "Select Airport *"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-4 h-4 scale-125 ml-2 transition-transform ${airportOpen ? "rotate-180" : "rotate-0"}`}
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {airportOpen && (
            <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-80 max-w-[90vw] rounded-sm bg-stone-900/80 text-white shadow-2xl border border-white/10 backdrop-blur-md overflow-hidden z-20">
              <div className="px-3 py-2 bg-black/30 text-[10px] tracking-[2px] font-semibold text-[#bd843b]">
                SELECT AIRPORT
              </div>
              <ul
                role="listbox"
                className="text-xs divide-y divide-white/10 max-h-60 overflow-auto form-styled-scroll"
              >
                {AIRPORT_OPTIONS.map((opt) => {
                  const { name, code } = splitAirportOption(opt);
                  const active = fields.airport === opt;
                  return (
                    <li
                      key={opt}
                      role="option"
                      aria-selected={active}
                      className={
                        "px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2 " +
                        (active ? "bg-white/10" : "")
                      }
                      onClick={() => {
                        setField("airport", opt);
                        setAirportOpen(false);
                      }}
                    >
                      <span className="truncate">{name}</span>
                      <span className="text-[11px] text-white/70">{code}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* Service Details */}
        <div className="space-y-2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            <div className="w-full">
              <Input
                type={dateType}
                name="dateOfService"
                placeholder={dateType === "text" ? "Service date" : undefined}
                value={fields.dateOfService}
                onChange={(e) => setField("dateOfService", e.target.value)}
                onFocus={() => setDateType("date")}
                onBlur={() => {
                  if (!fields.dateOfService) setDateType("text");
                }}
                {...errProps(
                  "dateOfService",
                  "[color-scheme:dark] [&::-webkit-calendar-picker-indicator]:invert",
                )}
              />
            </div>
            <div className="w-full">
              <Input
                type="text"
                name="aircraftModel"
                placeholder="Aircraft Model *"
                value={fields.aircraftModel}
                onChange={(e) => setField("aircraftModel", e.target.value)}
                required
                {...errProps("aircraftModel")}
              />
            </div>
          </div>

          <div className="w-full">
            <Input
              type="text"
              name="tailNumber"
              placeholder="Tail / Registration Number *"
              value={fields.tailNumber}
              onChange={(e) =>
                setField("tailNumber", e.target.value.toUpperCase())
              }
              required
              {...errProps("tailNumber")}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <Textarea
            name="message"
            placeholder="Message *"
            rows={5}
            value={fields.message}
            onChange={(e) => setField("message", e.target.value)}
            required
            className={
              "w-full bg-white/25 border-gray-300 text-white placeholder:text-white resize-none text-sm " +
              (errors.message ? "border-red-500 ring-1 ring-red-500" : "")
            }
            aria-invalid={Boolean(errors.message) || undefined}
            maxLength={2000}
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-[#bd843b] hover:bg-[#a76c3b] disabled:opacity-60 disabled:cursor-not-allowed hover:cursor-pointer text-white w-full sm:w-auto px-5 py-2.5 h-auto text-xs tracking-[2px] transition-all duration-300"
          >
            {status === "submitting" ? "SENDING..." : "CONTACT US"}
          </button>
        </div>

        {status === "err" && (
          <p className="text-center text-red-500 text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
