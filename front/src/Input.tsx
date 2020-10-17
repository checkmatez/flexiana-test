import React from 'react'

interface InputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
}

export const Input = ({ id, label, value, onChange }: InputProps) => {
  return (
    <div
    // style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <label htmlFor="a-string" style={{ marginRight: '1em' }}>
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 20px',
          margin: '8px 0',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )
}
