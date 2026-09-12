"use client";

export default function AtmosphericBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[#060607]" />

      {/* Primary mesh */}
      <div className="absolute top-[-25%] left-[-15%] w-[75vw] h-[75vw] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14)_0%,transparent_70%)] blur-3xl" />
      
      {/* Secondary mesh */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[65vw] h-[65vw] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.11)_0%,transparent_70%)] blur-3xl" />
      
      {/* Accent glow */}
      <div className="absolute top-[35%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.07)_0%,transparent_70%)] blur-3xl" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
    </div>
  );
}
