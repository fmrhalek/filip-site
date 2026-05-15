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
      <div className="flex min-h-[100svh] items-center justify-center bg-graphite px-6">
        <div className="max-w-md">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-accent">
            [ Error / 500 ]
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            something broke.
          </h2>
          <pre className="mb-6 whitespace-pre-wrap text-xs text-bone/60">
            {this.state.error?.message ?? "Unknown error"}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="border-b border-bone pb-1 text-[10px] uppercase tracking-[0.3em] hover:text-accent"
          >
            retry →
          </button>
        </div>
      </div>
    );
  }
}
