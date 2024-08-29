"use client";

import React, { PropsWithChildren } from "react";
import { useModel } from "./useModel";

export function Model({ children }: PropsWithChildren) {
  const { startResizing, height, width } = useModel();

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          cursor: "n-resize",
          border: '1px solid #d3d3d3'
        }}
        onMouseDown={startResizing}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          height: "100%",
          left: `${width}px`,
          cursor: "e-resize",
          border: '1px solid #d3d3d3'
        }}
        onMouseDown={startResizing}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          cursor: "s-resize",
          border: '1px solid #d3d3d3'
        }}
        onMouseDown={startResizing}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "100%",
          cursor: "w-resize",
          border: '1px solid #d3d3d3'
        }}
        onMouseDown={startResizing}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: `${width + 1}px`,
          height: '1.2em',
          border: "3px solid #808080",
          cursor: "nw-resize",
        }}
        onMouseDown={startResizing}
      />
      <div
        style={{
          position: "absolute",
          bottom: -5,
          right: -7,
          width: '1.4em',
          border: "3px solid #808080",
          cursor: "nw-resize",
        }}
        onMouseDown={startResizing}
      />
      {children}
    </div>
  );
}
