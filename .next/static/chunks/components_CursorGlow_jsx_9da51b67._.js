(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CursorGlow.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CursorGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CursorGlow() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Track pointer position for the glow
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorGlow.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const el = ref.current;
            if (!el) return;
            const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReduced) {
                // Keep a subtle, centered glow for users who prefer reduced motion
                el.style.setProperty('--x', '50%');
                el.style.setProperty('--y', '50%');
                return;
            }
            let rafId = 0;
            let lastX = 0;
            let lastY = 0;
            const update = {
                "CursorGlow.useEffect.update": ()=>{
                    el.style.setProperty('--x', "".concat(lastX, "px"));
                    el.style.setProperty('--y', "".concat(lastY, "px"));
                    rafId = 0;
                }
            }["CursorGlow.useEffect.update"];
            const onMove = {
                "CursorGlow.useEffect.onMove": (e)=>{
                    lastX = e.clientX;
                    lastY = e.clientY;
                    if (!rafId) {
                        rafId = window.requestAnimationFrame(update);
                    }
                }
            }["CursorGlow.useEffect.onMove"];
            window.addEventListener('pointermove', onMove, {
                passive: true
            });
            return ({
                "CursorGlow.useEffect": ()=>{
                    window.removeEventListener('pointermove', onMove);
                    if (rafId) cancelAnimationFrame(rafId);
                }
            })["CursorGlow.useEffect"];
        }
    }["CursorGlow.useEffect"], []);
    // Firework burst on click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorGlow.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const el = ref.current;
            if (!el) return;
            const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const spawnPulse = {
                "CursorGlow.useEffect.spawnPulse": (x, y)=>{
                    const ring = document.createElement('span');
                    ring.className = 'fw-ring';
                    ring.style.left = "".concat(x, "px");
                    ring.style.top = "".concat(y, "px");
                    ring.style.borderColor = 'rgba(59, 130, 246, 0.9)';
                    ring.style.boxShadow = '0 0 12px rgba(59,130,246,0.6)';
                    el.appendChild(ring);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(ring, {
                        scale: 0.2,
                        opacity: 0.7
                    }, {
                        scale: 1.6,
                        opacity: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        onComplete: {
                            "CursorGlow.useEffect.spawnPulse": ()=>ring.remove()
                        }["CursorGlow.useEffect.spawnPulse"]
                    });
                }
            }["CursorGlow.useEffect.spawnPulse"];
            const spawnFirework = {
                "CursorGlow.useEffect.spawnFirework": (x, y)=>{
                    const colors = [
                        '#60a5fa',
                        '#22d3ee',
                        '#a78bfa',
                        '#93c5fd',
                        '#ffffff'
                    ];
                    const count = 24;
                    for(let i = 0; i < count; i++){
                        const p = document.createElement('span');
                        p.className = 'fw-p';
                        p.style.left = "".concat(x, "px");
                        p.style.top = "".concat(y, "px");
                        const color = colors[Math.floor(Math.random() * colors.length)];
                        p.style.background = color;
                        p.style.boxShadow = "0 0 8px ".concat(color, ", 0 0 16px ").concat(color);
                        const size = 3 + Math.random() * 4;
                        p.style.width = "".concat(size, "px");
                        p.style.height = "".concat(size, "px");
                        el.appendChild(p);
                        const angle = i / count * Math.PI * 2 + (Math.random() * 0.6 - 0.3);
                        const distance = 120 + Math.random() * 160;
                        const duration = 0.7 + Math.random() * 0.5;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(p, {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1
                        }, {
                            x: Math.cos(angle) * distance,
                            y: Math.sin(angle) * distance,
                            opacity: 0,
                            scale: 0.1,
                            duration,
                            ease: 'power2.out',
                            onComplete: {
                                "CursorGlow.useEffect.spawnFirework": ()=>p.remove()
                            }["CursorGlow.useEffect.spawnFirework"]
                        });
                    }
                    // Central flash
                    const flash = document.createElement('span');
                    flash.className = 'fw-flash';
                    flash.style.left = "".concat(x, "px");
                    flash.style.top = "".concat(y, "px");
                    el.appendChild(flash);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(flash, {
                        opacity: 0.9,
                        scale: 0.6
                    }, {
                        opacity: 0,
                        scale: 1.8,
                        duration: 0.25,
                        ease: 'power1.out',
                        onComplete: {
                            "CursorGlow.useEffect.spawnFirework": ()=>flash.remove()
                        }["CursorGlow.useEffect.spawnFirework"]
                    });
                    // Shockwave ring
                    const ring = document.createElement('span');
                    ring.className = 'fw-ring';
                    ring.style.left = "".concat(x, "px");
                    ring.style.top = "".concat(y, "px");
                    ring.style.borderColor = 'rgba(99, 102, 241, 0.9)';
                    ring.style.boxShadow = '0 0 16px rgba(99,102,241,0.8), 0 0 32px rgba(34,211,238,0.5)';
                    el.appendChild(ring);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(ring, {
                        scale: 0.2,
                        opacity: 0.8
                    }, {
                        scale: 2.6,
                        opacity: 0,
                        duration: 0.9,
                        ease: 'power2.out',
                        onComplete: {
                            "CursorGlow.useEffect.spawnFirework": ()=>ring.remove()
                        }["CursorGlow.useEffect.spawnFirework"]
                    });
                }
            }["CursorGlow.useEffect.spawnFirework"];
            const onDown = {
                "CursorGlow.useEffect.onDown": (e)=>{
                    const x = e.clientX;
                    const y = e.clientY;
                    if (prefersReduced) {
                        spawnPulse(x, y);
                    } else {
                        spawnFirework(x, y);
                    }
                }
            }["CursorGlow.useEffect.onDown"];
            window.addEventListener('pointerdown', onDown, {
                passive: true
            });
            return ({
                "CursorGlow.useEffect": ()=>window.removeEventListener('pointerdown', onDown)
            })["CursorGlow.useEffect"];
        }
    }["CursorGlow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "aria-hidden": true,
        className: "jsx-5f658eec64b39a6c" + " " + "pointer-events-none fixed inset-0 z-[60] mix-blend-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-5f658eec64b39a6c" + " " + "cursor-glow-core absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/components/CursorGlow.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-5f658eec64b39a6c" + " " + "cursor-glow absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/components/CursorGlow.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-5f658eec64b39a6c" + " " + "cursor-glow-soft absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/components/CursorGlow.jsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "5f658eec64b39a6c",
                children: ".cursor-glow-core.jsx-5f658eec64b39a6c{background:radial-gradient(64px 64px at var(--x,50%)var(--y,50%),rgba(255,255,255,.9),rgba(59,130,246,.65) 50%,transparent 80%);filter:blur(2px);opacity:.95}.cursor-glow.jsx-5f658eec64b39a6c{background:radial-gradient(180px 180px at var(--x,50%)var(--y,50%),rgba(59,130,246,.35),rgba(59,130,246,.18) 55%,transparent 75%);filter:blur(6px)saturate(1.15)}.cursor-glow-soft.jsx-5f658eec64b39a6c{background:radial-gradient(300px 300px at var(--x,50%)var(--y,50%),rgba(59,130,246,.12),rgba(59,130,246,.06) 60%,transparent 80%);filter:blur(18px)saturate(1.1);opacity:.6}.fw-p.jsx-5f658eec64b39a6c,.fw-ring.jsx-5f658eec64b39a6c,.fw-flash.jsx-5f658eec64b39a6c{pointer-events:none;will-change:transform,opacity;mix-blend-mode:screen;position:absolute;transform:translate(-50%,-50%)}.fw-ring.jsx-5f658eec64b39a6c{border:2px solid rgba(59,130,246,.8);border-radius:9999px;width:14px;height:14px}.fw-flash.jsx-5f658eec64b39a6c{filter:blur(2px);background:radial-gradient(circle,rgba(255,255,255,.95) 0%,rgba(99,102,241,.8) 60%,transparent 70%);border-radius:9999px;width:16px;height:16px}@media (prefers-reduced-motion:reduce){.cursor-glow-core.jsx-5f658eec64b39a6c,.cursor-glow.jsx-5f658eec64b39a6c,.cursor-glow-soft.jsx-5f658eec64b39a6c{background-position:50%!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CursorGlow.jsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(CursorGlow, "lq1tzM4DdcBd9rchfALtCTAkzkA=");
_c = CursorGlow;
var _c;
__turbopack_context__.k.register(_c, "CursorGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_CursorGlow_jsx_9da51b67._.js.map