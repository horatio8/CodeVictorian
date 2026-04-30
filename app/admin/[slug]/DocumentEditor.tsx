"use client"

import { useState, useTransition } from "react"
import {
  type DocumentSchema,
  type FieldKind,
  defaultValueFor,
} from "@/lib/cms-schemas"

type Json = unknown

export default function DocumentEditor({
  schema,
  initial,
  action,
}: {
  schema: DocumentSchema
  initial: Json
  action: (formData: FormData) => Promise<void> | void
}) {
  const [data, setData] = useState<Record<string, Json>>(() =>
    seedDoc(schema, initial),
  )
  const [pending, start] = useTransition()

  function setKey(key: string, value: Json) {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.set("content", JSON.stringify(data))
        start(() => action(fd))
      }}
      className="space-y-8"
    >
      {Object.entries(schema.fields).map(([key, field]) => (
        <FieldRenderer
          key={key}
          field={field}
          value={data[key]}
          onChange={(v) => setKey(key, v)}
        />
      ))}

      <div className="sticky bottom-0 -mx-6 border-t border-gold-400/30 bg-cream/95 px-6 py-4 backdrop-blur">
        <button type="submit" disabled={pending} className="btn-primary">
          {pending ? "Saving…" : "Save and publish"}
        </button>
      </div>
    </form>
  )
}

function seedDoc(schema: DocumentSchema, initial: Json): Record<string, Json> {
  const obj = (initial && typeof initial === "object" ? initial : {}) as Record<string, Json>
  const out: Record<string, Json> = {}
  for (const [key, field] of Object.entries(schema.fields)) {
    out[key] = key in obj ? obj[key] : defaultValueFor(field)
  }
  return out
}

function FieldRenderer({
  field,
  value,
  onChange,
}: {
  field: FieldKind
  value: Json
  onChange: (v: Json) => void
}) {
  switch (field.type) {
    case "text":
      return (
        <Labeled label={field.label} help={field.help}>
          <input
            type="text"
            value={asString(value)}
            placeholder={field.placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="form-input"
          />
        </Labeled>
      )
    case "textarea":
      return (
        <Labeled label={field.label} help={field.help}>
          <textarea
            value={asString(value)}
            rows={field.rows ?? 4}
            onChange={(e) => onChange(e.target.value)}
            className="form-input resize-y"
          />
        </Labeled>
      )
    case "boolean":
      return (
        <label className="flex items-center gap-3 text-sm text-navy-800">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            className="h-4 w-4 accent-gold-400"
          />
          <span>
            {field.label}
            {field.help && (
              <span className="block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-navy-800/55">
                {field.help}
              </span>
            )}
          </span>
        </label>
      )
    case "stringList":
      return (
        <StringListEditor
          label={field.label}
          itemLabel={field.itemLabel ?? "Item"}
          help={field.help}
          value={asStringArray(value)}
          onChange={(v) => onChange(v)}
        />
      )
    case "objectList":
      return (
        <ObjectListEditor
          label={field.label}
          itemLabel={field.itemLabel ?? "Item"}
          help={field.help}
          fields={field.fields}
          value={asObjectArray(value)}
          onChange={(v) => onChange(v)}
        />
      )
    case "object":
      return (
        <fieldset className="border border-gold-400/25 bg-ivory/60 p-5">
          <legend className="px-2 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-gold-600">
            {field.label}
          </legend>
          <div className="space-y-5">
            {Object.entries(field.fields).map(([k, f]) => {
              const inner = (value && typeof value === "object" ? value : {}) as Record<string, Json>
              return (
                <FieldRenderer
                  key={k}
                  field={f}
                  value={k in inner ? inner[k] : defaultValueFor(f)}
                  onChange={(v) =>
                    onChange({ ...inner, [k]: v })
                  }
                />
              )
            })}
          </div>
        </fieldset>
      )
  }
}

function Labeled({
  label,
  help,
  children,
}: {
  label: string
  help?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-600">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {help && (
        <span className="mt-1 block text-xs text-navy-800/55">{help}</span>
      )}
    </label>
  )
}

function StringListEditor({
  label,
  itemLabel,
  help,
  value,
  onChange,
}: {
  label: string
  itemLabel: string
  help?: string
  value: string[]
  onChange: (v: string[]) => void
}) {
  return (
    <div>
      <span className="block font-mono text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-600">
        {label}
      </span>
      {help && (
        <span className="mt-1 block text-xs text-navy-800/55">{help}</span>
      )}
      <ul className="mt-3 space-y-2">
        {value.map((v, i) => (
          <li key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={v}
              onChange={(e) => {
                const next = value.slice()
                next[i] = e.target.value
                onChange(next)
              }}
              className="form-input flex-1"
            />
            <button
              type="button"
              onClick={() => onChange(value.filter((_, j) => j !== i))}
              className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-navy-800/55 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => onChange([...value, ""])}
        className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-gold-600 hover:text-gold-400"
      >
        + Add {itemLabel.toLowerCase()}
      </button>
    </div>
  )
}

function ObjectListEditor({
  label,
  itemLabel,
  help,
  fields,
  value,
  onChange,
}: {
  label: string
  itemLabel: string
  help?: string
  fields: Record<string, FieldKind>
  value: Array<Record<string, Json>>
  onChange: (v: Array<Record<string, Json>>) => void
}) {
  function emptyItem(): Record<string, Json> {
    const out: Record<string, Json> = {}
    for (const [k, f] of Object.entries(fields)) out[k] = defaultValueFor(f) as Json
    return out
  }

  return (
    <div>
      <span className="block font-mono text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gold-600">
        {label}
      </span>
      {help && (
        <span className="mt-1 block text-xs text-navy-800/55">{help}</span>
      )}
      <div className="mt-3 space-y-4">
        {value.map((item, i) => (
          <div key={i} className="border border-gold-400/25 bg-ivory/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-navy-800/55">
                {itemLabel} {i + 1}
              </span>
              <div className="flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.18em]">
                <button
                  type="button"
                  disabled={i === 0}
                  onClick={() => {
                    const next = value.slice()
                    ;[next[i - 1], next[i]] = [next[i], next[i - 1]]
                    onChange(next)
                  }}
                  className="text-navy-800/55 hover:text-gold-600 disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  type="button"
                  disabled={i === value.length - 1}
                  onClick={() => {
                    const next = value.slice()
                    ;[next[i + 1], next[i]] = [next[i], next[i + 1]]
                    onChange(next)
                  }}
                  className="text-navy-800/55 hover:text-gold-600 disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() => onChange(value.filter((_, j) => j !== i))}
                  className="text-navy-800/55 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {Object.entries(fields).map(([k, f]) => (
                <FieldRenderer
                  key={k}
                  field={f}
                  value={k in item ? item[k] : defaultValueFor(f)}
                  onChange={(v) => {
                    const next = value.slice()
                    next[i] = { ...item, [k]: v }
                    onChange(next)
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...value, emptyItem()])}
        className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-gold-600 hover:text-gold-400"
      >
        + Add {itemLabel.toLowerCase()}
      </button>
    </div>
  )
}

function asString(v: Json): string {
  return typeof v === "string" ? v : ""
}
function asStringArray(v: Json): string[] {
  return Array.isArray(v) ? v.filter((x) => typeof x === "string") : []
}
function asObjectArray(v: Json): Array<Record<string, Json>> {
  return Array.isArray(v)
    ? (v.filter((x) => x && typeof x === "object" && !Array.isArray(x)) as Array<
        Record<string, Json>
      >)
    : []
}
