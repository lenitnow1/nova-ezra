(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/sidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarContent",
    ()=>SidebarContent,
    "SidebarFooter",
    ()=>SidebarFooter,
    "SidebarGroup",
    ()=>SidebarGroup,
    "SidebarHeader",
    ()=>SidebarHeader,
    "SidebarItem",
    ()=>SidebarItem,
    "SidebarSeparator",
    ()=>SidebarSeparator,
    "SidebarTrigger",
    ()=>SidebarTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
const SidebarCtx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useSidebarCtx() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SidebarCtx);
    if (!ctx) throw new Error('Sidebar components must be used within <Sidebar>');
    return ctx;
}
_s(useSidebarCtx, "/dMy7t63NXD4eYACoT93CePwGrg=");
function Sidebar(param) {
    let { children, open: openProp, defaultOpen = false, onOpenChange } = param;
    _s1();
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastFocusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [uncontrolledOpen, setUncontrolledOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    const isControlled = openProp !== undefined;
    const open = isControlled ? openProp : uncontrolledOpen;
    const setOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Sidebar.useCallback[setOpen]": (v)=>{
            const next = typeof v === 'function' ? v(open) : v;
            if (!isControlled) setUncontrolledOpen(next);
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(next);
        }
    }["Sidebar.useCallback[setOpen]"], [
        isControlled,
        onOpenChange,
        open
    ]);
    // remember last focus to restore when closing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            if (open) return;
            // on close, restore focus
            const el = lastFocusedRef.current;
            if (el && typeof el.focus === 'function') {
                try {
                    el.focus();
                } catch (e) {}
            }
        }
    }["Sidebar.useEffect"], [
        open
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[value]": ()=>({
                open,
                setOpen,
                triggerRef,
                lastFocusedRef
            })
    }["Sidebar.useMemo[value]"], [
        open,
        setOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarCtx.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_s1(Sidebar, "B/rgBHu/bWoZDtMKo9nxQIkhxD8=");
_c = Sidebar;
function SidebarTrigger(param) {
    let { asChild = false, children, className = '', ...props } = param;
    _s2();
    const { open, setOpen, triggerRef, lastFocusedRef } = useSidebarCtx();
    const Comp = asChild ? 'span' : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: triggerRef,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        onClick: (e)=>{
            lastFocusedRef.current = e.currentTarget;
            setOpen((o)=>!o);
        },
        className: className || 'inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-md transition-colors',
        ...props,
        children: children !== null && children !== void 0 ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": true,
                    className: "text-white/80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 6h16M4 12h16M4 18h16",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/sidebar.jsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/sidebar.jsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: "Menu"
                }, void 0, false, {
                    fileName: "[project]/components/ui/sidebar.jsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/sidebar.jsx",
            lineNumber: 63,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s2(SidebarTrigger, "Od4xwVAPMoKfoQEBTFRQDciaMT8=", false, function() {
    return [
        useSidebarCtx
    ];
});
_c1 = SidebarTrigger;
function SidebarContent(param) {
    let { children, side = 'left', title = 'Navigation' } = param;
    _s3();
    const { open, setOpen } = useSidebarCtx();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close on ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarContent.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "SidebarContent.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') setOpen(false);
                    if (e.key === 'Tab') {
                        var _contentRef_current;
                        // very small focus trap
                        const focusable = (_contentRef_current = contentRef.current) === null || _contentRef_current === void 0 ? void 0 : _contentRef_current.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
                        if (!focusable || focusable.length === 0) return;
                        const first = focusable[0];
                        const last = focusable[focusable.length - 1];
                        if (e.shiftKey && document.activeElement === first) {
                            e.preventDefault();
                            last.focus();
                        } else if (!e.shiftKey && document.activeElement === last) {
                            e.preventDefault();
                            first.focus();
                        }
                    }
                }
            }["SidebarContent.useEffect.onKey"];
            document.addEventListener('keydown', onKey);
            return ({
                "SidebarContent.useEffect": ()=>document.removeEventListener('keydown', onKey)
            })["SidebarContent.useEffect"];
        }
    }["SidebarContent.useEffect"], [
        open,
        setOpen
    ]);
    // Focus first focusable on open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarContent.useEffect": ()=>{
            if (!open) return;
            const id = requestAnimationFrame({
                "SidebarContent.useEffect.id": ()=>{
                    var _contentRef_current;
                    const focusable = (_contentRef_current = contentRef.current) === null || _contentRef_current === void 0 ? void 0 : _contentRef_current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    if (focusable && typeof focusable.focus === 'function') focusable.focus();
                }
            }["SidebarContent.useEffect.id"]);
            return ({
                "SidebarContent.useEffect": ()=>cancelAnimationFrame(id)
            })["SidebarContent.useEffect"];
        }
    }["SidebarContent.useEffect"], [
        open
    ]);
    // Lock body scroll while sidebar is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarContent.useEffect": ()=>{
            if (!open) return;
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return ({
                "SidebarContent.useEffect": ()=>{
                    document.body.style.overflow = originalOverflow;
                }
            })["SidebarContent.useEffect"];
        }
    }["SidebarContent.useEffect"], [
        open
    ]);
    if (!open) return null;
    const sideClass = side === 'left' ? 'left-0 -translate-x-0' : 'right-0 translate-x-0';
    const enterFrom = side === 'left' ? '-translate-x-full' : 'translate-x-full';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": !open,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[900] bg-black/60",
                onClick: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": title,
                ref: contentRef,
                className: "fixed top-0 ".concat(side === 'left' ? 'left-0' : 'right-0', " z-[1000] h-dvh w-72 sm:w-80 border-r bg-black text-white shadow-xl transition-transform duration-300 will-change-transform ") + "".concat(enterFrom, " data-[open=true]:translate-x-0"),
                "data-open": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 py-4 border-b border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-semibold tracking-widest uppercase text-white/70",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/sidebar.jsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "inline-flex size-8 items-center justify-center rounded-md hover:bg-white/10",
                                    "aria-label": "Close sidebar",
                                    onClick: ()=>setOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6 6l12 12M18 6L6 18",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/sidebar.jsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/sidebar.jsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/sidebar.jsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/sidebar.jsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto p-2",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/components/ui/sidebar.jsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/sidebar.jsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s3(SidebarContent, "L8AHLlkfCmZT0M74A8nUel+wSP4=", false, function() {
    return [
        useSidebarCtx
    ];
});
_c2 = SidebarContent;
function SidebarHeader(param) {
    let { className = '', children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-3 py-2 text-xs uppercase tracking-wider text-white/50 ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 174,
        columnNumber: 10
    }, this);
}
_c3 = SidebarHeader;
function SidebarFooter(param) {
    let { className = '', children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-auto px-3 py-3 border-t border-white/10 ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 178,
        columnNumber: 10
    }, this);
}
_c4 = SidebarFooter;
function SidebarGroup(param) {
    let { className = '', children, label } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2 ".concat(className),
        children: [
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-1 text-[11px] font-medium uppercase tracking-wider text-white/40",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.jsx",
                lineNumber: 184,
                columnNumber: 16
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_c5 = SidebarGroup;
function SidebarItem(param) {
    let { className = '', icon, children, href = '#', onClick } = param;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors ".concat(className),
        children: [
            icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "opacity-80",
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.jsx",
                lineNumber: 193,
                columnNumber: 15
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.jsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
    return href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        onClick: onClick,
        className: "outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-md",
        children: content
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 198,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-md",
        children: content
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_c6 = SidebarItem;
function SidebarSeparator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-2 h-px w-full bg-white/10"
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.jsx",
        lineNumber: 209,
        columnNumber: 10
    }, this);
}
_c7 = SidebarSeparator;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Sidebar");
__turbopack_context__.k.register(_c1, "SidebarTrigger");
__turbopack_context__.k.register(_c2, "SidebarContent");
__turbopack_context__.k.register(_c3, "SidebarHeader");
__turbopack_context__.k.register(_c4, "SidebarFooter");
__turbopack_context__.k.register(_c5, "SidebarGroup");
__turbopack_context__.k.register(_c6, "SidebarItem");
__turbopack_context__.k.register(_c7, "SidebarSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$I3VLOAYZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/clerk-react/dist/chunk-I3VLOAYZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.jsx [app-client] (ecmascript)");
'use client';
;
;
;
function Header(param) {
    let { headerRef } = param;
    var _user_primaryEmailAddress, _user_primaryEmailAddress1;
    const hasClerk = !!("TURBOPACK compile-time value", "pk_test_YWJzb2x1dGUta2l0LTYyLmNsZXJrLmFjY291bnRzLmRldiQ");
    var _useUser;
    const { user } = (_useUser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"] === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])()) !== null && _useUser !== void 0 ? _useUser : {
        user: null
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: "relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-6 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    "data-anim": "nav",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarTrigger"], {
                                    className: " inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-md transition-colors mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.jsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarContent"], {
                                    title: "Menu",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarHeader"], {
                                            children: "Quick Access"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.jsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                                                    href: "#",
                                                    children: "Home"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.jsx",
                                                    lineNumber: 19,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                                                    href: "#features",
                                                    children: "Features"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.jsx",
                                                    lineNumber: 20,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                                                    href: "#about",
                                                    children: "About"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.jsx",
                                                    lineNumber: 21,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                                                    href: "#contact",
                                                    children: "Contact"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.jsx",
                                                    lineNumber: 22,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                                                    href: "/dashboard",
                                                    children: "Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.jsx",
                                                    lineNumber: 23,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                                                    href: "/learn-more",
                                                    children: "Learn More"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.jsx",
                                                    lineNumber: 24,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.jsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarSeparator"], {}, void 0, false, {
                                            fileName: "[project]/components/Header.jsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarFooter"], {
                                            children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedOut"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignInButton"], {
                                                            mode: "modal",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/20",
                                                                children: "Sign In"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.jsx",
                                                                lineNumber: 32,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Header.jsx",
                                                            lineNumber: 31,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.jsx",
                                                        lineNumber: 30,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedIn"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-1 w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-white/70",
                                                                            children: "Account"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Header.jsx",
                                                                            lineNumber: 40,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$I3VLOAYZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserButton"], {
                                                                            afterSignOutUrl: "/"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Header.jsx",
                                                                            lineNumber: 41,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Header.jsx",
                                                                    lineNumber: 39,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-white/60 truncate",
                                                                    title: (user === null || user === void 0 ? void 0 : (_user_primaryEmailAddress = user.primaryEmailAddress) === null || _user_primaryEmailAddress === void 0 ? void 0 : _user_primaryEmailAddress.emailAddress) || '',
                                                                    children: user === null || user === void 0 ? void 0 : (_user_primaryEmailAddress1 = user.primaryEmailAddress) === null || _user_primaryEmailAddress1 === void 0 ? void 0 : _user_primaryEmailAddress1.emailAddress
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Header.jsx",
                                                                    lineNumber: 43,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Header.jsx",
                                                            lineNumber: 38,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.jsx",
                                                        lineNumber: 37,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ "TURBOPACK unreachable"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.jsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.jsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "size-8 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-[0_0_24px_rgba(99,102,241,0.45)]"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold tracking-widest uppercase text-sm text-white/80",
                            children: "Nova"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden md:flex items-center gap-8 text-white/70",
                    children: [
                        [
                            'Home',
                            'Features',
                            'About',
                            'Contact'
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/learn-more",
                                className: "hover:text-blue-700 transition-colors",
                                "data-anim": "nav",
                                children: item
                            }, item, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/learn-more",
                            className: "hover:text-white transition-colors",
                            "data-anim": "nav",
                            children: "Learn More"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-anim": "nav",
                    className: "hidden sm:flex items-center gap-3",
                    children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedOut"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignInButton"], {
                                    mode: "modal",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-md transition-colors",
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.jsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedIn"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$I3VLOAYZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserButton"], {
                                    afterSignOutUrl: "/"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.jsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : "TURBOPACK unreachable"
                }, void 0, false, {
                    fileName: "[project]/components/Header.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/carousel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Carousel",
    ()=>Carousel,
    "CarouselContent",
    ()=>CarouselContent,
    "CarouselItem",
    ()=>CarouselItem,
    "CarouselNext",
    ()=>CarouselNext,
    "CarouselPrevious",
    ()=>CarouselPrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
const CarouselContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function Carousel(param) {
    let { className = '', options = {
        loop: true,
        align: 'start'
    }, autoplay = true, autoplayDelay = 4000, children } = param;
    _s();
    const plugins = [];
    if (autoplay) {
        plugins.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            delay: autoplayDelay,
            stopOnInteraction: false,
            stopOnMouseEnter: true
        }));
    }
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options, plugins);
    const [canScrollPrev, setCanScrollPrev] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollNext, setCanScrollNext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[onSelect]": (api)=>{
            if (!api) return;
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }
    }["Carousel.useCallback[onSelect]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (!emblaApi) return;
            onSelect(emblaApi);
            emblaApi.on('select', onSelect);
            emblaApi.on('reInit', onSelect);
            return ({
                "Carousel.useEffect": ()=>{
                    emblaApi.off('select', onSelect);
                    emblaApi.off('reInit', onSelect);
                }
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], [
        emblaApi,
        onSelect
    ]);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[scrollPrev]": ()=>emblaApi && emblaApi.scrollPrev()
    }["Carousel.useCallback[scrollPrev]"], [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[scrollNext]": ()=>emblaApi && emblaApi.scrollNext()
    }["Carousel.useCallback[scrollNext]"], [
        emblaApi
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContext.Provider, {
        value: {
            emblaApi,
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative ".concat(className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden",
                ref: emblaRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "-ml-4 flex",
                    role: "list",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/carousel.jsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/carousel.jsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/carousel.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Carousel, "IcNqXzGzQ1tvrlkcAuqy4La4Dlw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Carousel;
function CarouselContent(param) {
    let { className = '', children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_c1 = CarouselContent;
function CarouselItem(param) {
    let { className = '', children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "listitem",
        className: "min-w-0 shrink-0 grow-0 basis-full pl-4 ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/carousel.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c2 = CarouselItem;
function CarouselPrevious(param) {
    let { className = '' } = param;
    _s1();
    const { scrollPrev, canScrollPrev } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CarouselContext) || {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": "Previous slide",
        onClick: scrollPrev,
        disabled: !canScrollPrev,
        className: "absolute left-2 top-1/2 -translate-y-1/2 inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur border border-white/10 transition disabled:opacity-40 disabled:cursor-not-allowed ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "size-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M15.53 4.47a.75.75 0 0 1 0 1.06L9.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 1.06 0Z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/components/ui/carousel.jsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/carousel.jsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s1(CarouselPrevious, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
_c3 = CarouselPrevious;
function CarouselNext(param) {
    let { className = '' } = param;
    _s2();
    const { scrollNext, canScrollNext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CarouselContext) || {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": "Next slide",
        onClick: scrollNext,
        disabled: !canScrollNext,
        className: "absolute right-2 top-1/2 -translate-y-1/2 inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur border border-white/10 transition disabled:opacity-40 disabled:cursor-not-allowed ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "size-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M8.47 19.53a.75.75 0 0 1 0-1.06L14.94 12 8.47 5.53a.75.75 0 1 1 1.06-1.06l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0Z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/components/ui/carousel.jsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/carousel.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s2(CarouselNext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
_c4 = CarouselNext;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Carousel");
__turbopack_context__.k.register(_c1, "CarouselContent");
__turbopack_context__.k.register(_c2, "CarouselItem");
__turbopack_context__.k.register(_c3, "CarouselPrevious");
__turbopack_context__.k.register(_c4, "CarouselNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CarouselSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarouselSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/carousel.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CarouselSection(param) {
    let { className = '' } = param;
    _s();
    const slides = [
        {
            src: '/binary-code-with-globe-laptop-computer.jpg',
            alt: 'Binary code with globe on a laptop screen'
        },
        {
            src: '/lee-campbell-DtDlVpy-vvQ-unsplash.jpg',
            alt: 'Abstract neon lights by Lee Campbell'
        },
        {
            src: '/person-working-html-computer.jpg',
            alt: 'Person coding HTML on a computer'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarouselSection.useEffect": ()=>{
            // Simple GSAP reveal for images when the section mounts
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.slide-img', {
                autoAlpha: 0,
                scale: 0.96,
                y: 12
            }, {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15
            });
        }
    }["CarouselSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-16 ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
            className: "mx-auto max-w-5xl relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselPrevious"], {}, void 0, false, {
                    fileName: "[project]/components/CarouselSection.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselNext"], {}, void 0, false, {
                    fileName: "[project]/components/CarouselSection.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                    children: slides.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[22rem] sm:h-[26rem] md:h-[28rem] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md ring-1 ring-inset ring-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: s.src,
                                    alt: s.alt,
                                    className: "slide-img h-full w-full object-cover",
                                    loading: i === 0 ? 'eager' : 'lazy'
                                }, void 0, false, {
                                    fileName: "[project]/components/CarouselSection.jsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CarouselSection.jsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/CarouselSection.jsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/CarouselSection.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CarouselSection.jsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CarouselSection.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(CarouselSection, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CarouselSection;
var _c;
__turbopack_context__.k.register(_c, "CarouselSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CarouselSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CarouselSection.jsx [app-client] (ecmascript)");
'use client';
;
;
function Hero(param) {
    let { titleRef, subtitleRef, ctasRef, splitText } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-7xl px-6 pt-10 pb-24 md:pb-32 lg:pt-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 -top-6 flex gap-8 justify-center",
                        children: [
                            ...Array(5)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "reveal-cover block h-10 w-10  md:w-36 bg-gradient-to-r from-cyan-400/60 to-indigo-500/60 rounded-full"
                            }, i, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 13,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: titleRef,
                        className: "text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-[0_2px_40px_rgba(99,102,241,0.25)]",
                            children: splitText('The Future, Now')
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: subtitleRef,
                        className: "mt-6 max-w-2xl text-lg md:text-xl text-white/70",
                        children: "Build immersive experiences with speed-of-light performance. Crafted for creators who dream in neon."
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ctasRef,
                        className: "mt-10 flex flex-col sm:flex-row items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold px-6 py-3 shadow-[0_10px_30px_rgba(56,189,248,0.25)] hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)] transition-shadow",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-md px-6 py-3",
                                children: "Learn More"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CarouselSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Hero.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative z-10 border-t border-white/10/0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-10 text-center text-sm text-white/40",
            children: [
                "© ",
                new Date().getFullYear(),
                " Nova — Made with Next.js & GSAP by ezra muwowo"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ServicesSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ServicesSection(param) {
    let { id = 'services' } = param;
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesSection.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "ServicesSection.useEffect.ctx": ()=>{
                    const q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.selector(sectionRef);
                    // Slide in the whole section content from the left
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(q('[data-anim="slide-left"]'), {
                        x: -80,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                            once: true
                        }
                    });
                    // Reveal/zoom-in cards
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(q('[data-anim="reveal"]'), {
                        opacity: 0,
                        y: 36,
                        scale: 0.96,
                        duration: 0.9,
                        ease: 'power3.out',
                        stagger: 0.12,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 75%',
                            once: true
                        }
                    });
                    // Parallax decor
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(q('[data-parallax="slow"]'), {
                        yPercent: -20,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true
                        }
                    });
                }
            }["ServicesSection.useEffect.ctx"], sectionRef);
            return ({
                "ServicesSection.useEffect": ()=>ctx.revert()
            })["ServicesSection.useEffect"];
        }
    }["ServicesSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: sectionRef,
        className: "relative z-10 py-24 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-parallax": "slow",
                        className: "absolute -left-24 top-1/4 h-72 w-72 rounded-full blur-3xl opacity-30",
                        style: {
                            background: 'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.35), transparent 60%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ServicesSection.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-parallax": "slow",
                        className: "absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl opacity-30",
                        style: {
                            background: 'radial-gradient(circle at 70% 70%, rgba(99,102,241,0.35), transparent 60%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ServicesSection.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ServicesSection.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6",
                "data-anim": "slide-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold tracking-tight",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/components/ServicesSection.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-white/70",
                                children: "Everything you need to launch, scale, and delight your users."
                            }, void 0, false, {
                                fileName: "[project]/components/ServicesSection.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServicesSection.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: [
                            {
                                title: 'API Integrations',
                                desc: 'Robust, well‑documented endpoints with real‑time webhooks.'
                            },
                            {
                                title: 'Authentication',
                                desc: 'Enterprise‑grade auth with SSO, MFA, and fine‑grained roles.'
                            },
                            {
                                title: 'Analytics',
                                desc: 'Actionable insights with anomaly detection and cohort analysis.'
                            },
                            {
                                title: 'Automation',
                                desc: 'Powerful workflows with retries, scheduling, and branching.'
                            },
                            {
                                title: 'Security',
                                desc: 'End‑to‑end encryption, audit logs, and compliance tooling.'
                            },
                            {
                                title: 'Support',
                                desc: '24/7 global support and dedicated success engineers.'
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-anim": "reveal",
                                className: "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 ring-1 ring-inset ring-white/5 hover:bg-white/10 transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServicesSection.jsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-white",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ServicesSection.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-white/70",
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ServicesSection.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ServicesSection.jsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ServicesSection.jsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/ServicesSection.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ServicesSection.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ServicesSection.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ServicesSection.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(ServicesSection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PaymentsSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PaymentsSection(param) {
    let { id = 'payments' } = param;
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaymentsSection.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "PaymentsSection.useEffect.ctx": ()=>{
                    const q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.selector(sectionRef);
                    // Slide in the whole section content from the left
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(q('[data-anim="slide-left"]'), {
                        x: -80,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                            once: true
                        }
                    });
                    // Reveal headline and cards
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(q('[data-anim="hdr"]'), {
                        opacity: 0,
                        y: 24,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                            once: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(q('[data-anim="card"]'), {
                        opacity: 0,
                        y: 40,
                        scale: 0.95,
                        duration: 0.9,
                        ease: 'power3.out',
                        stagger: 0.15,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 70%',
                            once: true
                        }
                    });
                    // Parallax background shapes
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(q('[data-parallax="bg"]'), {
                        yPercent: -25,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true
                        }
                    });
                }
            }["PaymentsSection.useEffect.ctx"], sectionRef);
            return ({
                "PaymentsSection.useEffect": ()=>ctx.revert()
            })["PaymentsSection.useEffect"];
        }
    }["PaymentsSection.useEffect"], []);
    const features = [
        {
            title: 'Global Payments',
            desc: 'Accept 135+ currencies with intelligent routing for the best rates.'
        },
        {
            title: 'Instant Payouts',
            desc: 'Move money to your bank in seconds with real‑time transfers.'
        },
        {
            title: 'Fraud Shield',
            desc: 'Adaptive risk models and 3‑D Secure to keep chargebacks low.'
        },
        {
            title: 'Subscriptions',
            desc: 'Revenue tooling for trials, proration, and dunning automation.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: sectionRef,
        className: "relative z-10 py-24 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-parallax": "bg",
                    className: "absolute left-1/2 -translate-x-1/2 -top-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25",
                    style: {
                        background: 'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.35), transparent 60%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/PaymentsSection.jsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PaymentsSection.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6",
                "data-anim": "slide-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto",
                        "data-anim": "hdr",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold tracking-tight",
                                children: "Payments"
                            }, void 0, false, {
                                fileName: "[project]/components/PaymentsSection.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-white/70",
                                children: "A delightful checkout with globe‑spanning rails and bank‑grade security."
                            }, void 0, false, {
                                fileName: "[project]/components/PaymentsSection.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PaymentsSection.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-anim": "card",
                                className: "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 ring-1 ring-inset ring-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PaymentsSection.jsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-white",
                                                    children: f.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PaymentsSection.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-white/70",
                                                    children: f.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PaymentsSection.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PaymentsSection.jsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PaymentsSection.jsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/PaymentsSection.jsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/PaymentsSection.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 rounded-2xl border border-white/10 bg-white/5/50 backdrop-blur-md p-4 ring-1 ring-inset ring-white/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/80 text-sm",
                                    children: "Try our demo checkout — zero setup."
                                }, void 0, false, {
                                    fileName: "[project]/components/PaymentsSection.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold px-5 py-2.5 shadow-[0_10px_30px_rgba(56,189,248,0.25)] hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)] transition-shadow",
                                    children: "Launch Demo"
                                }, void 0, false, {
                                    fileName: "[project]/components/PaymentsSection.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PaymentsSection.jsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PaymentsSection.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PaymentsSection.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PaymentsSection.jsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(PaymentsSection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = PaymentsSection;
var _c;
__turbopack_context__.k.register(_c, "PaymentsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HistorySection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HistorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HistorySection(param) {
    let { id = 'history' } = param;
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HistorySection.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "HistorySection.useEffect.ctx": ()=>{
                    const q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.selector(sectionRef);
                    // Slide in the whole section content from the left
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(q('[data-anim="slide-left"]'), {
                        x: -80,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                            once: true
                        }
                    });
                    // Timeline items stagger in
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(q('[data-anim="item"]'), {
                        opacity: 0,
                        y: 28,
                        duration: 0.8,
                        ease: 'power3.out',
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 75%',
                            once: true
                        }
                    });
                    // Subtle parallax on line
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(q('[data-parallax="line"]'), {
                        yPercent: -15,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true
                        }
                    });
                }
            }["HistorySection.useEffect.ctx"], sectionRef);
            return ({
                "HistorySection.useEffect": ()=>ctx.revert()
            })["HistorySection.useEffect"];
        }
    }["HistorySection.useEffect"], []);
    const events = [
        {
            year: '2021',
            label: 'MVP Launched',
            desc: 'Shipped the first public beta with core features.'
        },
        {
            year: '2022',
            label: 'Series A',
            desc: 'Raised funding and scaled the team internationally.'
        },
        {
            year: '2023',
            label: 'Global Launch',
            desc: 'Expanded to 40+ regions with localized experiences.'
        },
        {
            year: '2024',
            label: 'Realtime Engine',
            desc: 'Introduced low‑latency streaming APIs and edge compute.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: sectionRef,
        className: "relative z-10 py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6",
            "data-anim": "slide-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold tracking-tight",
                            children: "History"
                        }, void 0, false, {
                            fileName: "[project]/components/HistorySection.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-white/70",
                            children: "Milestones that shaped the journey."
                        }, void 0, false, {
                            fileName: "[project]/components/HistorySection.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HistorySection.jsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-parallax": "line",
                            className: "absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/HistorySection.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "relative grid grid-cols-1 gap-8",
                            children: events.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    "data-anim": "item",
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col ".concat(i % 2 ? 'md:items-end' : ''),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white/40 text-sm tracking-widest uppercase",
                                                        children: e.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HistorySection.jsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HistorySection.jsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HistorySection.jsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 ring-1 ring-inset ring-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-white",
                                                        children: e.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HistorySection.jsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 text-sm text-white/70",
                                                        children: e.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HistorySection.jsx",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HistorySection.jsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HistorySection.jsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/HistorySection.jsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/HistorySection.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HistorySection.jsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HistorySection.jsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HistorySection.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(HistorySection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = HistorySection;
var _c;
__turbopack_context__.k.register(_c, "HistorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CircularText.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'motion/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
const getRotationTransition = function(duration, from) {
    let loop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    return {
        from,
        to: from + 360,
        ease: 'linear',
        duration,
        type: 'tween',
        repeat: loop ? Infinity : 0
    };
};
const getTransition = (duration, from)=>({
        rotate: getRotationTransition(duration, from),
        scale: {
            type: 'spring',
            damping: 20,
            stiffness: 300
        }
    });
const CircularText = (param)=>{
    let { text, spinDuration = 20, onHover = 'speedUp', className = '' } = param;
    _s();
    const letters = Array.from(text);
    const controls = useAnimation();
    const rotation = useMotionValue(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CircularText.useEffect": ()=>{
            const start = rotation.get();
            controls.start({
                rotate: start + 360,
                scale: 1,
                transition: getTransition(spinDuration, start)
            });
        }
    }["CircularText.useEffect"], [
        spinDuration,
        text,
        onHover,
        controls,
        rotation
    ]);
    const handleHoverStart = ()=>{
        const start = rotation.get();
        if (!onHover) return;
        let transitionConfig;
        let scaleVal = 1;
        switch(onHover){
            case 'slowDown':
                transitionConfig = getTransition(spinDuration * 2, start);
                break;
            case 'speedUp':
                transitionConfig = getTransition(spinDuration / 4, start);
                break;
            case 'pause':
                transitionConfig = {
                    rotate: {
                        type: 'spring',
                        damping: 20,
                        stiffness: 300
                    },
                    scale: {
                        type: 'spring',
                        damping: 20,
                        stiffness: 300
                    }
                };
                scaleVal = 1;
                break;
            case 'goBonkers':
                transitionConfig = getTransition(spinDuration / 20, start);
                scaleVal = 0.8;
                break;
            default:
                transitionConfig = getTransition(spinDuration, start);
        }
        controls.start({
            rotate: start + 360,
            scale: scaleVal,
            transition: transitionConfig
        });
    };
    const handleHoverEnd = ()=>{
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start)
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        className: "m-0 mx-auto rounded-full w-[200px] h-[200px] relative text-white font-black text-center cursor-pointer origin-center ".concat(className),
        style: {
            rotate: rotation
        },
        initial: {
            rotate: 0
        },
        animate: controls,
        onMouseEnter: handleHoverStart,
        onMouseLeave: handleHoverEnd,
        children: letters.map((letter, i)=>{
            const rotationDeg = 360 / letters.length * i;
            const factor = Math.PI / letters.length;
            const x = factor * i;
            const y = factor * i;
            const transform = "rotateZ(".concat(rotationDeg, "deg) translate3d(").concat(x, "px, ").concat(y, "px, 0)");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]",
                style: {
                    transform,
                    WebkitTransform: transform
                },
                children: letter
            }, i, false, {
                fileName: "[project]/components/CircularText.jsx",
                lineNumber: 98,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/components/CircularText.jsx",
        lineNumber: 82,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CircularText, "xbJChhEMd1e1Dy7CWTuS6TcG5K0=", false, function() {
    return [
        useAnimation,
        useMotionValue
    ];
});
_c = CircularText;
const __TURBOPACK__default__export__ = CircularText;
var _c;
__turbopack_context__.k.register(_c, "CircularText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PixelBlast.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postprocessing/build/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const createTouchTexture = ()=>{
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('2D context not available');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](canvas);
    texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
    texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
    texture.generateMipmaps = false;
    const trail = [];
    let last = null;
    const maxAge = 64;
    let radius = 0.1 * size;
    const speed = 1 / maxAge;
    const clear = ()=>{
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    const drawPoint = (p)=>{
        const pos = {
            x: p.x * size,
            y: (1 - p.y) * size
        };
        let intensity = 1;
        const easeOutSine = (t)=>Math.sin(t * Math.PI / 2);
        const easeOutQuad = (t)=>-t * (t - 2);
        if (p.age < maxAge * 0.3) intensity = easeOutSine(p.age / (maxAge * 0.3));
        else intensity = easeOutQuad(1 - (p.age - maxAge * 0.3) / (maxAge * 0.7)) || 0;
        intensity *= p.force;
        const color = "".concat((p.vx + 1) / 2 * 255, ", ").concat((p.vy + 1) / 2 * 255, ", ").concat(intensity * 255);
        const offset = size * 5;
        ctx.shadowOffsetX = offset;
        ctx.shadowOffsetY = offset;
        ctx.shadowBlur = radius;
        ctx.shadowColor = "rgba(".concat(color, ",").concat(0.22 * intensity, ")");
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,1)';
        ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
        ctx.fill();
    };
    const addTouch = (norm)=>{
        let force = 0;
        let vx = 0;
        let vy = 0;
        if (last) {
            const dx = norm.x - last.x;
            const dy = norm.y - last.y;
            if (dx === 0 && dy === 0) return;
            const dd = dx * dx + dy * dy;
            const d = Math.sqrt(dd);
            vx = dx / (d || 1);
            vy = dy / (d || 1);
            force = Math.min(dd * 10000, 1);
        }
        last = {
            x: norm.x,
            y: norm.y
        };
        trail.push({
            x: norm.x,
            y: norm.y,
            age: 0,
            force,
            vx,
            vy
        });
    };
    const update = ()=>{
        clear();
        for(let i = trail.length - 1; i >= 0; i--){
            const point = trail[i];
            const f = point.force * speed * (1 - point.age / maxAge);
            point.x += point.vx * f;
            point.y += point.vy * f;
            point.age++;
            if (point.age > maxAge) trail.splice(i, 1);
        }
        for(let i = 0; i < trail.length; i++)drawPoint(trail[i]);
        texture.needsUpdate = true;
    };
    return {
        canvas,
        texture,
        addTouch,
        update,
        set radiusScale (v){
            radius = 0.1 * size * v;
        },
        get radiusScale () {
            return radius / (0.1 * size);
        },
        size
    };
};
const createLiquidEffect = (texture, opts)=>{
    const fragment = "\n    uniform sampler2D uTexture;\n    uniform float uStrength;\n    uniform float uTime;\n    uniform float uFreq;\n\n    void mainUv(inout vec2 uv) {\n      vec4 tex = texture2D(uTexture, uv);\n      float vx = tex.r * 2.0 - 1.0;\n      float vy = tex.g * 2.0 - 1.0;\n      float intensity = tex.b;\n\n      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);\n\n      float amt = uStrength * intensity * wave;\n\n      uv += vec2(vx, vy) * amt;\n    }\n    ";
    var _opts_strength, _opts_freq;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"]('LiquidEffect', fragment, {
        uniforms: new Map([
            [
                'uTexture',
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](texture)
            ],
            [
                'uStrength',
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"]((_opts_strength = opts === null || opts === void 0 ? void 0 : opts.strength) !== null && _opts_strength !== void 0 ? _opts_strength : 0.025)
            ],
            [
                'uTime',
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0)
            ],
            [
                'uFreq',
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"]((_opts_freq = opts === null || opts === void 0 ? void 0 : opts.freq) !== null && _opts_freq !== void 0 ? _opts_freq : 4.5)
            ]
        ])
    });
};
const SHAPE_MAP = {
    square: 0,
    circle: 1,
    triangle: 2,
    diamond: 3
};
const VERTEX_SRC = "\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n}\n";
const FRAGMENT_SRC = "\nprecision highp float;\n\nuniform vec3  uColor;\nuniform vec2  uResolution;\nuniform float uTime;\nuniform float uPixelSize;\nuniform float uScale;\nuniform float uDensity;\nuniform float uPixelJitter;\nuniform int   uEnableRipples;\nuniform float uRippleSpeed;\nuniform float uRippleThickness;\nuniform float uRippleIntensity;\nuniform float uEdgeFade;\n\nuniform int   uShapeType;\nconst int SHAPE_SQUARE   = 0;\nconst int SHAPE_CIRCLE   = 1;\nconst int SHAPE_TRIANGLE = 2;\nconst int SHAPE_DIAMOND  = 3;\n\nconst int   MAX_CLICKS = 10;\n\nuniform vec2  uClickPos  [MAX_CLICKS];\nuniform float uClickTimes[MAX_CLICKS];\n\nout vec4 fragColor;\n\nfloat Bayer2(vec2 a) {\n  a = floor(a);\n  return fract(a.x / 2. + a.y * a.y * .75);\n}\n#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))\n#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))\n\n#define FBM_OCTAVES     5\n#define FBM_LACUNARITY  1.25\n#define FBM_GAIN        1.0\n\nfloat hash11(float n){ return fract(sin(n)*43758.5453); }\n\nfloat vnoise(vec3 p){\n  vec3 ip = floor(p);\n  vec3 fp = fract(p);\n  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));\n  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));\n  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));\n  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));\n  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));\n  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));\n  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));\n  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));\n  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);\n  float x00 = mix(n000, n100, w.x);\n  float x10 = mix(n010, n110, w.x);\n  float x01 = mix(n001, n101, w.x);\n  float x11 = mix(n011, n111, w.x);\n  float y0  = mix(x00, x10, w.y);\n  float y1  = mix(x01, x11, w.y);\n  return mix(y0, y1, w.z) * 2.0 - 1.0;\n}\n\nfloat fbm2(vec2 uv, float t){\n  vec3 p = vec3(uv * uScale, t);\n  float amp = 1.0;\n  float freq = 1.0;\n  float sum = 1.0;\n  for (int i = 0; i < FBM_OCTAVES; ++i){\n    sum  += amp * vnoise(p * freq);\n    freq *= FBM_LACUNARITY;\n    amp  *= FBM_GAIN;\n  }\n  return sum * 0.5 + 0.5;\n}\n\nfloat maskCircle(vec2 p, float cov){\n  float r = sqrt(cov) * .25;\n  float d = length(p - 0.5) - r;\n  float aa = 0.5 * fwidth(d);\n  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));\n}\n\nfloat maskTriangle(vec2 p, vec2 id, float cov){\n  bool flip = mod(id.x + id.y, 2.0) > 0.5;\n  if (flip) p.x = 1.0 - p.x;\n  float r = sqrt(cov);\n  float d  = p.y - r*(1.0 - p.x);\n  float aa = fwidth(d);\n  return cov * clamp(0.5 - d/aa, 0.0, 1.0);\n}\n\nfloat maskDiamond(vec2 p, float cov){\n  float r = sqrt(cov) * 0.564;\n  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);\n}\n\nvoid main(){\n  float pixelSize = uPixelSize;\n  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;\n  float aspectRatio = uResolution.x / uResolution.y;\n\n  vec2 pixelId = floor(fragCoord / pixelSize);\n  vec2 pixelUV = fract(fragCoord / pixelSize);\n\n  float cellPixelSize = 8.0 * pixelSize;\n  vec2 cellId = floor(fragCoord / cellPixelSize);\n  vec2 cellCoord = cellId * cellPixelSize;\n  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);\n\n  float base = fbm2(uv, uTime * 0.05);\n  base = base * 0.5 - 0.65;\n\n  float feed = base + (uDensity - 0.5) * 0.3;\n\n  float speed     = uRippleSpeed;\n  float thickness = uRippleThickness;\n  const float dampT     = 1.0;\n  const float dampR     = 10.0;\n\n  if (uEnableRipples == 1) {\n    for (int i = 0; i < MAX_CLICKS; ++i){\n      vec2 pos = uClickPos[i];\n      if (pos.x < 0.0) continue;\n      float cellPixelSize = 8.0 * pixelSize;\n      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);\n      float t = max(uTime - uClickTimes[i], 0.0);\n      float r = distance(uv, cuv);\n      float waveR = speed * t;\n      float ring  = exp(-pow((r - waveR) / thickness, 2.0));\n      float atten = exp(-dampT * t) * exp(-dampR * r);\n      feed = max(feed, ring * atten * uRippleIntensity);\n    }\n  }\n\n  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;\n  float bw = step(0.5, feed + bayer);\n\n  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);\n  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;\n  float coverage = bw * jitterScale;\n  float M;\n  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);\n  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);\n  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);\n  else                                   M = coverage;\n\n  if (uEdgeFade > 0.0) {\n    vec2 norm = gl_FragCoord.xy / uResolution;\n    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));\n    float fade = smoothstep(0.0, uEdgeFade, edge);\n    M *= fade;\n  }\n\n  vec3 color = uColor;\n  fragColor = vec4(color, M);\n}\n";
const MAX_CLICKS = 10;
const PixelBlast = (param)=>{
    let { variant = 'square', pixelSize = 3, color = '#B19EEF', className, style, antialias = true, patternScale = 2, patternDensity = 1, liquid = false, liquidStrength = 0.1, liquidRadius = 1, pixelSizeJitter = 0, enableRipples = true, rippleIntensityScale = 1, rippleThickness = 0.1, rippleSpeed = 0.3, liquidWobbleSpeed = 4.5, autoPauseOffscreen = true, speed = 0.5, transparent = true, edgeFade = 0.5, noiseAmount = 0 } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visibilityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        visible: true
    });
    const speedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(speed);
    const threeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevConfigRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelBlast.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            speedRef.current = speed;
            const needsReinitKeys = [
                'antialias',
                'liquid',
                'noiseAmount'
            ];
            const cfg = {
                antialias,
                liquid,
                noiseAmount
            };
            let mustReinit = false;
            if (!threeRef.current) mustReinit = true;
            else if (prevConfigRef.current) {
                for (const k of needsReinitKeys)if (prevConfigRef.current[k] !== cfg[k]) {
                    mustReinit = true;
                    break;
                }
            }
            if (mustReinit) {
                if (threeRef.current) {
                    var _t_resizeObserver, _t_quad, _t_composer;
                    const t = threeRef.current;
                    (_t_resizeObserver = t.resizeObserver) === null || _t_resizeObserver === void 0 ? void 0 : _t_resizeObserver.disconnect();
                    cancelAnimationFrame(t.raf);
                    (_t_quad = t.quad) === null || _t_quad === void 0 ? void 0 : _t_quad.geometry.dispose();
                    t.material.dispose();
                    (_t_composer = t.composer) === null || _t_composer === void 0 ? void 0 : _t_composer.dispose();
                    t.renderer.dispose();
                    if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement);
                    threeRef.current = null;
                }
                const canvas = document.createElement('canvas');
                const gl = canvas.getContext('webgl2', {
                    antialias,
                    alpha: true
                });
                if (!gl) return;
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    context: gl,
                    antialias,
                    alpha: true
                });
                renderer.domElement.style.width = '100%';
                renderer.domElement.style.height = '100%';
                renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                container.appendChild(renderer.domElement);
                var _SHAPE_MAP_variant;
                const uniforms = {
                    uResolution: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
                    },
                    uTime: {
                        value: 0
                    },
                    uColor: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color)
                    },
                    uClickPos: {
                        value: Array.from({
                            length: MAX_CLICKS
                        }, {
                            "PixelBlast.useEffect": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1, -1)
                        }["PixelBlast.useEffect"])
                    },
                    uClickTimes: {
                        value: new Float32Array(MAX_CLICKS)
                    },
                    uShapeType: {
                        value: (_SHAPE_MAP_variant = SHAPE_MAP[variant]) !== null && _SHAPE_MAP_variant !== void 0 ? _SHAPE_MAP_variant : 0
                    },
                    uPixelSize: {
                        value: pixelSize * renderer.getPixelRatio()
                    },
                    uScale: {
                        value: patternScale
                    },
                    uDensity: {
                        value: patternDensity
                    },
                    uPixelJitter: {
                        value: pixelSizeJitter
                    },
                    uEnableRipples: {
                        value: enableRipples ? 1 : 0
                    },
                    uRippleSpeed: {
                        value: rippleSpeed
                    },
                    uRippleThickness: {
                        value: rippleThickness
                    },
                    uRippleIntensity: {
                        value: rippleIntensityScale
                    },
                    uEdgeFade: {
                        value: edgeFade
                    }
                };
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](-1, 1, 1, -1, 0, 1);
                const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                    vertexShader: VERTEX_SRC,
                    fragmentShader: FRAGMENT_SRC,
                    uniforms,
                    transparent: true,
                    glslVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLSL3"],
                    depthTest: false,
                    depthWrite: false
                });
                const quadGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2);
                const quad = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](quadGeom, material);
                scene.add(quad);
                const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
                const setSize = {
                    "PixelBlast.useEffect.setSize": ()=>{
                        var _threeRef_current;
                        const w = container.clientWidth || 1;
                        const h = container.clientHeight || 1;
                        renderer.setSize(w, h, false);
                        uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height);
                        if ((_threeRef_current = threeRef.current) === null || _threeRef_current === void 0 ? void 0 : _threeRef_current.composer) threeRef.current.composer.setSize(renderer.domElement.width, renderer.domElement.height);
                        uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio();
                    }
                }["PixelBlast.useEffect.setSize"];
                setSize();
                const ro = new ResizeObserver(setSize);
                ro.observe(container);
                const randomFloat = {
                    "PixelBlast.useEffect.randomFloat": ()=>{
                        var _window_crypto;
                        if ("object" !== 'undefined' && ((_window_crypto = window.crypto) === null || _window_crypto === void 0 ? void 0 : _window_crypto.getRandomValues)) {
                            const u32 = new Uint32Array(1);
                            window.crypto.getRandomValues(u32);
                            return u32[0] / 0xffffffff;
                        }
                        return Math.random();
                    }
                }["PixelBlast.useEffect.randomFloat"];
                const timeOffset = randomFloat() * 1000;
                let composer;
                let touch;
                let liquidEffect;
                if (liquid) {
                    touch = createTouchTexture();
                    touch.radiusScale = liquidRadius;
                    composer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"](renderer);
                    const renderPass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderPass"](scene, camera);
                    liquidEffect = createLiquidEffect(touch.texture, {
                        strength: liquidStrength,
                        freq: liquidWobbleSpeed
                    });
                    const effectPass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectPass"](camera, liquidEffect);
                    effectPass.renderToScreen = true;
                    composer.addPass(renderPass);
                    composer.addPass(effectPass);
                }
                if (noiseAmount > 0) {
                    if (!composer) {
                        composer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"](renderer);
                        composer.addPass(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderPass"](scene, camera));
                    }
                    const noiseEffect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"]('NoiseEffect', "uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ", {
                        uniforms: new Map([
                            [
                                'uTime',
                                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0)
                            ],
                            [
                                'uAmount',
                                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](noiseAmount)
                            ]
                        ])
                    });
                    const noisePass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectPass"](camera, noiseEffect);
                    noisePass.renderToScreen = true;
                    if (composer && composer.passes.length > 0) composer.passes.forEach({
                        "PixelBlast.useEffect": (p)=>p.renderToScreen = false
                    }["PixelBlast.useEffect"]);
                    composer.addPass(noisePass);
                }
                if (composer) composer.setSize(renderer.domElement.width, renderer.domElement.height);
                const mapToPixels = {
                    "PixelBlast.useEffect.mapToPixels": (e)=>{
                        const rect = renderer.domElement.getBoundingClientRect();
                        const scaleX = renderer.domElement.width / rect.width;
                        const scaleY = renderer.domElement.height / rect.height;
                        const fx = (e.clientX - rect.left) * scaleX;
                        const fy = (rect.height - (e.clientY - rect.top)) * scaleY;
                        return {
                            fx,
                            fy,
                            w: renderer.domElement.width,
                            h: renderer.domElement.height
                        };
                    }
                }["PixelBlast.useEffect.mapToPixels"];
                const onPointerDown = {
                    "PixelBlast.useEffect.onPointerDown": (e)=>{
                        var _threeRef_current;
                        const { fx, fy } = mapToPixels(e);
                        var _threeRef_current_clickIx;
                        const ix = (_threeRef_current_clickIx = (_threeRef_current = threeRef.current) === null || _threeRef_current === void 0 ? void 0 : _threeRef_current.clickIx) !== null && _threeRef_current_clickIx !== void 0 ? _threeRef_current_clickIx : 0;
                        uniforms.uClickPos.value[ix].set(fx, fy);
                        uniforms.uClickTimes.value[ix] = uniforms.uTime.value;
                        if (threeRef.current) threeRef.current.clickIx = (ix + 1) % MAX_CLICKS;
                    }
                }["PixelBlast.useEffect.onPointerDown"];
                const onPointerMove = {
                    "PixelBlast.useEffect.onPointerMove": (e)=>{
                        if (!touch) return;
                        const { fx, fy, w, h } = mapToPixels(e);
                        touch.addTouch({
                            x: fx / w,
                            y: fy / h
                        });
                    }
                }["PixelBlast.useEffect.onPointerMove"];
                renderer.domElement.addEventListener('pointerdown', onPointerDown, {
                    passive: true
                });
                renderer.domElement.addEventListener('pointermove', onPointerMove, {
                    passive: true
                });
                let raf = 0;
                const animate = {
                    "PixelBlast.useEffect.animate": ()=>{
                        if (autoPauseOffscreen && !visibilityRef.current.visible) {
                            raf = requestAnimationFrame(animate);
                            return;
                        }
                        uniforms.uTime.value = timeOffset + clock.getElapsedTime() * speedRef.current;
                        if (liquidEffect) liquidEffect.uniforms.get('uTime').value = uniforms.uTime.value;
                        if (composer) {
                            if (touch) touch.update();
                            composer.passes.forEach({
                                "PixelBlast.useEffect.animate": (p)=>{
                                    const effs = p.effects;
                                    if (effs) effs.forEach({
                                        "PixelBlast.useEffect.animate": (eff)=>{
                                            var _eff_uniforms;
                                            const u = (_eff_uniforms = eff.uniforms) === null || _eff_uniforms === void 0 ? void 0 : _eff_uniforms.get('uTime');
                                            if (u) u.value = uniforms.uTime.value;
                                        }
                                    }["PixelBlast.useEffect.animate"]);
                                }
                            }["PixelBlast.useEffect.animate"]);
                            composer.render();
                        } else renderer.render(scene, camera);
                        raf = requestAnimationFrame(animate);
                    }
                }["PixelBlast.useEffect.animate"];
                raf = requestAnimationFrame(animate);
                threeRef.current = {
                    renderer,
                    scene,
                    camera,
                    material,
                    clock,
                    clickIx: 0,
                    uniforms,
                    resizeObserver: ro,
                    raf,
                    quad,
                    timeOffset,
                    composer,
                    touch,
                    liquidEffect
                };
            } else {
                const t = threeRef.current;
                var _SHAPE_MAP_variant1;
                t.uniforms.uShapeType.value = (_SHAPE_MAP_variant1 = SHAPE_MAP[variant]) !== null && _SHAPE_MAP_variant1 !== void 0 ? _SHAPE_MAP_variant1 : 0;
                t.uniforms.uPixelSize.value = pixelSize * t.renderer.getPixelRatio();
                t.uniforms.uColor.value.set(color);
                t.uniforms.uScale.value = patternScale;
                t.uniforms.uDensity.value = patternDensity;
                t.uniforms.uPixelJitter.value = pixelSizeJitter;
                t.uniforms.uEnableRipples.value = enableRipples ? 1 : 0;
                t.uniforms.uRippleIntensity.value = rippleIntensityScale;
                t.uniforms.uRippleThickness.value = rippleThickness;
                t.uniforms.uRippleSpeed.value = rippleSpeed;
                t.uniforms.uEdgeFade.value = edgeFade;
                if (transparent) t.renderer.setClearAlpha(0);
                else t.renderer.setClearColor(0x000000, 1);
                if (t.liquidEffect) {
                    const uStrength = t.liquidEffect;
                    if (uStrength) uStrength.value = liquidStrength;
                    const uFreq = t.liquidEffect.uniforms.get('uFreq');
                    if (uFreq) uFreq.value = liquidWobbleSpeed;
                }
                if (t.touch) t.touch.radiusScale = liquidRadius;
            }
            prevConfigRef.current = cfg;
            return ({
                "PixelBlast.useEffect": ()=>{
                    var _t_resizeObserver, _t_quad, _t_composer;
                    if (threeRef.current && mustReinit) return;
                    if (!threeRef.current) return;
                    const t = threeRef.current;
                    (_t_resizeObserver = t.resizeObserver) === null || _t_resizeObserver === void 0 ? void 0 : _t_resizeObserver.disconnect();
                    cancelAnimationFrame(t.raf);
                    (_t_quad = t.quad) === null || _t_quad === void 0 ? void 0 : _t_quad.geometry.dispose();
                    t.material.dispose();
                    (_t_composer = t.composer) === null || _t_composer === void 0 ? void 0 : _t_composer.dispose();
                    t.renderer.dispose();
                    if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement);
                    threeRef.current = null;
                }
            })["PixelBlast.useEffect"];
        }
    }["PixelBlast.useEffect"], [
        antialias,
        liquid,
        noiseAmount,
        pixelSize,
        patternScale,
        patternDensity,
        enableRipples,
        rippleIntensityScale,
        rippleThickness,
        rippleSpeed,
        pixelSizeJitter,
        edgeFade,
        transparent,
        liquidStrength,
        liquidRadius,
        liquidWobbleSpeed,
        autoPauseOffscreen,
        variant,
        color,
        speed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full h-full relative overflow-hidden ".concat(className !== null && className !== void 0 ? className : ''),
        style: style,
        "aria-label": "PixelBlast interactive background"
    }, void 0, false, {
        fileName: "[project]/components/PixelBlast.jsx",
        lineNumber: 591,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PixelBlast, "4/F70/x0+L7nAfXxnp+Tig683DM=");
_c = PixelBlast;
const __TURBOPACK__default__export__ = PixelBlast;
var _c;
__turbopack_context__.k.register(_c, "PixelBlast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Dock.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'motion/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
function DockItem(param) {
    let { children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isHovered = useMotionValue(0);
    const mouseDistance = useTransform(mouseX, {
        "DockItem.useTransform[mouseDistance]": (val)=>{
            var _ref_current;
            var _ref_current_getBoundingClientRect;
            const rect = (_ref_current_getBoundingClientRect = (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.getBoundingClientRect()) !== null && _ref_current_getBoundingClientRect !== void 0 ? _ref_current_getBoundingClientRect : {
                x: 0,
                width: baseItemSize
            };
            return val - rect.x - baseItemSize / 2;
        }
    }["DockItem.useTransform[mouseDistance]"]);
    const targetSize = useTransform(mouseDistance, [
        -distance,
        0,
        distance
    ], [
        baseItemSize,
        magnification,
        baseItemSize
    ]);
    const size = useSpring(targetSize, spring);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        ref: ref,
        style: {
            width: size,
            height: size
        },
        onHoverStart: ()=>isHovered.set(1),
        onHoverEnd: ()=>isHovered.set(0),
        onFocus: ()=>isHovered.set(1),
        onBlur: ()=>isHovered.set(0),
        onClick: onClick,
        className: "relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-md ".concat(className),
        tabIndex: 0,
        role: "button",
        "aria-haspopup": "true",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                isHovered
            }))
    }, void 0, false, {
        fileName: "[project]/components/Dock.jsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_s(DockItem, "QD1RMPQ8m9XsgPFJqpWypT5OUzQ=", false, function() {
    return [
        useMotionValue,
        useTransform,
        useTransform,
        useSpring
    ];
});
_c = DockItem;
function DockLabel(param) {
    let { children, className = '', ...rest } = param;
    _s1();
    const { isHovered } = rest;
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DockLabel.useEffect": ()=>{
            const unsubscribe = isHovered.on('change', {
                "DockLabel.useEffect.unsubscribe": (latest)=>{
                    setIsVisible(latest === 1);
                }
            }["DockLabel.useEffect.unsubscribe"]);
            return ({
                "DockLabel.useEffect": ()=>unsubscribe()
            })["DockLabel.useEffect"];
        }
    }["DockLabel.useEffect"], [
        isHovered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            initial: {
                opacity: 0,
                y: 0
            },
            animate: {
                opacity: 1,
                y: -10
            },
            exit: {
                opacity: 0,
                y: 0
            },
            transition: {
                duration: 0.2
            },
            className: "".concat(className, " absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white"),
            role: "tooltip",
            style: {
                x: '-50%'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/components/Dock.jsx",
            lineNumber: 57,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dock.jsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
_s1(DockLabel, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c1 = DockLabel;
function DockIcon(param) {
    let { children, className = '' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Dock.jsx",
        lineNumber: 74,
        columnNumber: 12
    }, this);
}
_c2 = DockIcon;
function Dock(param) {
    let { items, className = '', spring = {
        mass: 0.1,
        stiffness: 150,
        damping: 12
    }, magnification = 70, distance = 200, panelHeight = 64, dockHeight = 256, baseItemSize = 50 } = param;
    _s2();
    const mouseX = useMotionValue(Infinity);
    const isHovered = useMotionValue(0);
    const maxHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dock.useMemo[maxHeight]": ()=>Math.max(dockHeight, magnification + magnification / 2 + 4)
    }["Dock.useMemo[maxHeight]"], [
        magnification,
        dockHeight
    ]);
    const heightRow = useTransform(isHovered, [
        0,
        1
    ], [
        panelHeight,
        maxHeight
    ]);
    const height = useSpring(heightRow, spring);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        style: {
            height,
            scrollbarWidth: 'none'
        },
        className: "mx-2 flex max-w-full items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            onMouseMove: (param)=>{
                let { pageX } = param;
                isHovered.set(1);
                mouseX.set(pageX);
            },
            onMouseLeave: ()=>{
                isHovered.set(0);
                mouseX.set(Infinity);
            },
            className: "".concat(className, " absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border-neutral-700 border-2 pb-2 px-4"),
            style: {
                height: panelHeight
            },
            role: "toolbar",
            "aria-label": "Application dock",
            children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockItem, {
                    onClick: item.onClick,
                    className: item.className,
                    mouseX: mouseX,
                    spring: spring,
                    distance: distance,
                    magnification: magnification,
                    baseItemSize: baseItemSize,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockIcon, {
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/components/Dock.jsx",
                            lineNumber: 124,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockLabel, {
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Dock.jsx",
                            lineNumber: 125,
                            columnNumber: 25
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/Dock.jsx",
                    lineNumber: 114,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Dock.jsx",
            lineNumber: 99,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dock.jsx",
        lineNumber: 98,
        columnNumber: 9
    }, this);
}
_s2(Dock, "yDaCl94tHOrividYCf31TQOlkIA=", false, function() {
    return [
        useMotionValue,
        useMotionValue,
        useTransform,
        useSpring
    ];
});
_c3 = Dock;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DockItem");
__turbopack_context__.k.register(_c1, "DockLabel");
__turbopack_context__.k.register(_c2, "DockIcon");
__turbopack_context__.k.register(_c3, "Dock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/page.js'\n\nUnexpected token `export`. Expected a string literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=_5a820097._.js.map