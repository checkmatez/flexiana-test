import React from 'react'
import { Input } from './Input'

export const App = () => {
  const [aString, setAString] = React.useState('')
  const [bString, setBString] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [canRearrange, setCanRearrange] = React.useState<boolean | undefined>()
  const [err, setErr] = React.useState<string | undefined>()

  const submit = async () => {
    setLoading(true)
    setErr(undefined)
    setCanRearrange(undefined)
    try {
      const response = await fetch(`/can-rearrange`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ a: aString, b: bString }),
      })
      const result: { result: boolean } = await response.json()
      setCanRearrange(result.result)
    } catch (error) {
      setErr(error.message)
    }
    setLoading(false)
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()

    submit()
  }

  return (
    <div
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
          minHeight: '400px',
        }}
      >
        <Input
          id="a-string"
          label="String with characters"
          value={aString}
          onChange={setAString}
        />
        <Input
          id="b-string"
          label="String to contain"
          value={bString}
          onChange={setBString}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
          }}
        >
          Submit
        </button>
        {loading && <p>Loading...</p>}
        {err && <p>{`Error: ${err}`}</p>}
        {canRearrange !== undefined && (
          <p>{`Can rearrange: ${canRearrange}`}</p>
        )}
      </form>
    </div>
  )
}
