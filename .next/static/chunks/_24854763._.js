(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Infocard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
// Tailwind-based Info Card (no external styled-components dependency)
// Props:
// - label: small prefix text before date (e.g., "Article on")
// - date: secondary small text on the right of the header
// - title: main heading text
// - categories: array of strings
// - footer: footer text (e.g., author)
// - className: extra classes for outer wrapper
const Card = (param)=>{
    let { label = '', date = '', title = '', description = '', categories = [], footer = '', className = '' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'w-full max-w-sm h-full',
            'text-white',
            'p-5 rounded-lg',
            'relative',
            // Gradient border trick using CSS custom background
            '[background:linear-gradient(#212121,#212121)_padding-box,linear-gradient(145deg,transparent_35%,#0000FF,#40c9ff)_border-box] border border-transparent',
            'flex flex-col',
            'cursor-pointer origin-bottom-right',
            'transition duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-10',
            'bg-[#212121]',
            className
        ].join(' '),
        "data-anim": "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    (label || date) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-white/50 mr-1",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/Infocard.jsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/70",
                                children: date
                            }, void 0, false, {
                                fileName: "[project]/components/Infocard.jsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Infocard.jsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl mt-6 mb-2 font-semibold leading-snug",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/Infocard.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/70 mb-4",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/Infocard.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    Array.isArray(categories) && categories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 flex-wrap",
                        children: categories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-[#0000FF] text-black/90 px-2 py-1 font-semibold uppercase text-[12px] rounded-full",
                                children: cat
                            }, i, false, {
                                fileName: "[project]/components/Infocard.jsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/Infocard.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Infocard.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-semibold text-white/60 mt-2",
                children: footer
            }, void 0, false, {
                fileName: "[project]/components/Infocard.jsx",
                lineNumber: 69,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Infocard.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
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
"[project]/app/learn-more/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearnMorePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Infocard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PixelBlast$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PixelBlast.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LearnMorePage() {
    _s();
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnMorePage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReduced) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "LearnMorePage.useEffect.ctx": ()=>{
                    // Intro
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from("[data-anim='title']", {
                        y: 24,
                        opacity: 0,
                        duration: 0.7,
                        ease: 'power3.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from("[data-anim='intro']", {
                        y: 20,
                        opacity: 0,
                        duration: 0.7,
                        ease: 'power3.out',
                        delay: 0.1
                    });
                    // Cards (clear inline transform after entrance so hover effects work)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set("[data-anim='card']", {
                        opacity: 0,
                        x: 48
                    });
                    const tlCards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                    tlCards.to("[data-anim='card']", {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        stagger: 0.25,
                        delay: 0.8
                    });
                    // Remove inline transform so Tailwind hover:rotate-* can take effect
                    tlCards.set("[data-anim='card']", {
                        clearProps: 'transform'
                    });
                    // Web Projects section heading
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from("[data-anim='section-title']", {
                        y: 16,
                        opacity: 0,
                        duration: 0.7,
                        ease: 'power3.out',
                        delay: 0.15
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from("[data-anim='section-intro']", {
                        y: 16,
                        opacity: 0,
                        duration: 0.7,
                        ease: 'power3.out',
                        delay: 0.18
                    });
                }
            }["LearnMorePage.useEffect.ctx"], mainRef);
            return ({
                "LearnMorePage.useEffect": ()=>ctx.revert()
            })["LearnMorePage.useEffect"];
        }
    }["LearnMorePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: mainRef,
        className: "min-h-screen  text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    height: '100%',
                    position: 'fixed'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PixelBlast$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "circle",
                    pixelSize: 6,
                    color: "#0000FF",
                    patternScale: 3,
                    patternDensity: 1.2,
                    pixelSizeJitter: 0.5,
                    rippleSpeed: 0.4,
                    rippleThickness: 0.12,
                    rippleIntensityScale: 1.5,
                    liquid: true,
                    liquidStrength: 0.12,
                    liquidRadius: 1.2,
                    liquidWobbleSpeed: 5,
                    speed: 0.6,
                    edgeFade: 0.25,
                    transparent: true
                }, void 0, false, {
                    fileName: "[project]/app/learn-more/page.jsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/learn-more/page.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-6 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        "data-anim": "title",
                        className: "text-4xl sm:text-5xl font-bold tracking-tight",
                        children: "Learn More"
                    }, void 0, false, {
                        fileName: "[project]/app/learn-more/page.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-anim": "intro",
                        className: "mt-4 text-white/70 max-w-2xl",
                        children: "Discover how Nova helps you build, launch, and scale faster. This page provides an overview of our features, technology, and the principles guiding our product."
                    }, void 0, false, {
                        fileName: "[project]/app/learn-more/page.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-12 grid gap-8 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "About",
                                title: "What is Nova?",
                                description: "Nova is a modern starter that blends beautiful UI, delightful motion, and pragmatic tooling to help you ship production-ready apps quickly.",
                                categories: [
                                    "UI",
                                    "Motion",
                                    "Tooling"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/app/learn-more/page.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Highlights",
                                title: "Key Features",
                                description: "A curated set of features to accelerate your workflow.",
                                categories: [
                                    'Responsive',
                                    'Animations',
                                    'Auth-ready',
                                    'Tailwind'
                                ]
                            }, void 0, false, {
                                fileName: "[project]/app/learn-more/page.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Stack",
                                title: "Technology",
                                description: "Built with Next.js App Router, React, Tailwind CSS, and a sprinkle of GSAP for motion.",
                                categories: [
                                    "Next.js",
                                    "React",
                                    "Tailwind",
                                    "GSAP"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/app/learn-more/page.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Start Here",
                                title: "Get Started",
                                description: "Explore the dashboard, sign in to sync your data, or return to the home page to learn more about Nova.",
                                categories: [
                                    "Dashboard",
                                    "Sign In",
                                    "Home"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/app/learn-more/page.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/learn-more/page.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-anim": "section-title",
                                className: "text-3xl font-semibold tracking-tight",
                                children: "Web Projects"
                            }, void 0, false, {
                                fileName: "[project]/app/learn-more/page.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-anim": "section-intro",
                                className: "mt-3 text-white/70 max-w-3xl",
                                children: "From fast marketing sites to data-rich dashboards, Nova accelerates delivery across a wide range of web projects. Here are some common project types we help teams ship quickly and beautifully."
                            }, void 0, false, {
                                fileName: "[project]/app/learn-more/page.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Web Projects",
                                        title: "Portfolio Websites",
                                        description: "Beautiful, blazing-fast personal and brand sites tuned for accessibility, SEO, and performance.",
                                        categories: [
                                            "Next.js",
                                            "SEO",
                                            "Tailwind"
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/app/learn-more/page.jsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Web Projects",
                                        title: "E‑commerce Stores",
                                        description: "Conversion-focused storefronts with secure checkout, product search, and analytics.",
                                        categories: [
                                            "Stripe",
                                            "Products",
                                            "Analytics"
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/app/learn-more/page.jsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Web Projects",
                                        title: "SaaS Dashboards",
                                        description: "Data-rich admin panels and customer dashboards with charts and real-time updates.",
                                        categories: [
                                            "SaaS",
                                            "Charts",
                                            "Realtime"
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/app/learn-more/page.jsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Web Projects",
                                        title: "Marketing Landing Pages",
                                        description: "A/B-tested pages with crisp motion, forms, and integrations that convert.",
                                        categories: [
                                            "Landing",
                                            "A/B",
                                            "GSAP"
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/app/learn-more/page.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Web Projects",
                                        title: "Blogs & CMS",
                                        description: "Content platforms powered by headless CMSs like Sanity, Contentful, or MDX.",
                                        categories: [
                                            "Headless",
                                            "CMS",
                                            "MDX"
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/app/learn-more/page.jsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Infocard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Web Projects",
                                        title: "Internal Tools",
                                        description: "Custom internal apps to automate workflows, approvals, and reporting.",
                                        categories: [
                                            "Automation",
                                            "Internal",
                                            "APIs"
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/app/learn-more/page.jsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/learn-more/page.jsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/learn-more/page.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/",
                            className: "inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors",
                            children: "← Back to Home"
                        }, void 0, false, {
                            fileName: "[project]/app/learn-more/page.jsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/learn-more/page.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/learn-more/page.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/learn-more/page.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(LearnMorePage, "u3Gw5L7odfDjyITWI9+zzQshucQ=");
_c = LearnMorePage;
var _c;
__turbopack_context__.k.register(_c, "LearnMorePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_24854763._.js.map