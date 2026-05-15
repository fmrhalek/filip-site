"use client";

import React from "react";

type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (process.env.NODE_ENV !== "production") {
      console.error("ErrorBoundary:", error, info);
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-bone px-6">
        <div className="max-w-md text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            [ Error / 500 ]
          </p>
          <h2 className="mb-6 font-display text-4xl tracking-[-0.02em]">
            Something slipped its orbit.
          </h2>
          <p className="mb-8 font-sans text-sm text-ink/60">
            {this.state.error?.message ?? "An unexpected error occurred."}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="border-b border-ink pb-1 font-mono text-xs uppercase tracking-[0.3em] hover:text-accent"
          >
            Try again →
          </button>
        </div>
      </div>
    );
  }
}
