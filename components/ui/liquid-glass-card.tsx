"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "./liquid-glass-card.module.css"

type LiquidGlassIntensity = "subtle" | "default" | "strong"

type LiquidGlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
  intensity?: LiquidGlassIntensity
  interactive?: boolean
}

type LiquidGlassStyle = React.CSSProperties & {
  "--mouse-x"?: string
  "--mouse-y"?: string
  "--pointer-x"?: number
  "--pointer-y"?: number
}

function LiquidGlassCard({
  className,
  onPointerMove,
  onPointerLeave,
  style,
  children,
  intensity = "default",
  interactive = true,
  ...props
}: LiquidGlassCardProps) {
  const frameRef = React.useRef<number | null>(null)
  const latestPointerRef = React.useRef<{
    element: HTMLDivElement
    x: number
    y: number
    pointerX: number
    pointerY: number
  } | null>(null)

  const flushPointer = React.useCallback(() => {
    frameRef.current = null

    const latest = latestPointerRef.current
    if (!latest) {
      return
    }

    latest.element.style.setProperty("--mouse-x", `${latest.x}px`)
    latest.element.style.setProperty("--mouse-y", `${latest.y}px`)
    latest.element.style.setProperty("--pointer-x", latest.pointerX.toFixed(4))
    latest.element.style.setProperty("--pointer-y", latest.pointerY.toFixed(4))
  }, [])

  const handlePointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerMove?.(event)

      if (!interactive || event.defaultPrevented || event.pointerType === "touch") {
        return
      }

      const { currentTarget, clientX, clientY } = event
      const rect = currentTarget.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      latestPointerRef.current = {
        element: currentTarget,
        x,
        y,
        pointerX: (x / rect.width) * 2 - 1,
        pointerY: (y / rect.height) * 2 - 1,
      }

      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(flushPointer)
      }
    },
    [flushPointer, interactive, onPointerMove],
  )

  const handlePointerLeave = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerLeave?.(event)

      if (!interactive || event.defaultPrevented) {
        return
      }

      latestPointerRef.current = {
        element: event.currentTarget,
        x: event.currentTarget.clientWidth / 2,
        y: event.currentTarget.clientHeight / 2,
        pointerX: 0,
        pointerY: 0,
      }

      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(flushPointer)
      }
    },
    [flushPointer, interactive, onPointerLeave],
  )

  React.useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <div
      data-slot="liquid-glass-card"
      data-intensity={intensity}
      data-interactive={interactive ? "true" : "false"}
      className={cn(styles.root, className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--pointer-x": 0,
          "--pointer-y": 0,
          ...style,
        } as LiquidGlassStyle
      }
      {...props}
    >
      <span aria-hidden="true" data-liquid-layer className={cn(styles.layer, styles.base)} />
      {interactive ? (
        <>
          <span aria-hidden="true" data-liquid-layer className={cn(styles.layer, styles.refraction)} />
          <span aria-hidden="true" data-liquid-layer className={cn(styles.layer, styles.specular)} />
        </>
      ) : null}
      <span aria-hidden="true" data-liquid-layer className={cn(styles.layer, styles.reflection)} />
      <span aria-hidden="true" data-liquid-layer className={cn(styles.layer, styles.edge)} />
      {children}
    </div>
  )
}

export { LiquidGlassCard }
export type { LiquidGlassCardProps, LiquidGlassIntensity }
