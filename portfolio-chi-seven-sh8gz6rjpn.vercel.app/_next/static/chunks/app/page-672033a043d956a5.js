(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        28: (e, t, s) => {
            "use strict";
            s.d(t, {
                ProjectsSection: () => h
            });
            var r = s(1215),
                a = s(2446),
                i = s(287);
            s(5591);
            var n = s(8142),
                o = s(3736),
                l = s(411);
            let c = (0, o.F)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
                        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
                        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function d(e) {
                let {
                    className: t,
                    variant: s,
                    asChild: a = !1,
                    ...i
                } = e, o = a ? n.DX : "span";
                return (0, r.jsx)(o, {
                    "data-slot": "badge",
                    className: (0, l.cn)(c({
                        variant: s
                    }), t),
                    ...i
                })
            }
            var m = s(1166),
                x = s(8799);

            function h() {
                return (0, r.jsx)("section", {
                    id: "projects",
                    className: "py-16 px-2 sm:py-20 sm:px-4 md:px-6 lg:px-8 bg-background",
                    children: (0, r.jsxs)("div", {
                        className: "max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8",
                        children: [(0, r.jsxs)("div", {
                            className: "text-center mb-12 sm:mb-16",
                            children: [(0, r.jsx)("h2", {
                                className: "text-3xl sm:text-4xl font-bold text-foreground mb-4",
                                children: "Featured Projects"
                            }), (0, r.jsx)("p", {
                                className: "text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto",
                                children: "A showcase of my recent work and technical expertise"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [{
                                title: "Viso Platform",
                                description: "Motivation-only content stream that helps users focus by cutting distractions. Quick in-video notes auto-save to your dashboard with source attribution to track where you learned what.",
                                image: "/viso.png",
                                metrics: [{
                                    label: "+28% focus time (beta)",
                                    color: "green"
                                }, {
                                    label: "-35% tab switching",
                                    color: "emerald"
                                }, {
                                    label: "1K+ notes saved",
                                    color: "blue"
                                }],
                                technologies: ["React", "Tailwind CSS"],
                                liveUrl: "https://viso-website-nw5h.vercel.app/",
                                githubUrl: "https://github.com/abhishekmeena7/viso-website"
                            }, {
                                title: "Contracts Dashboard (SaaS)",
                                description: "SPA for managing contracts with mocked auth, uploads, searchable list with filters & pagination, deep contract insights (clauses, AI risks, evidence). Clean, responsive UX for fast review.",
                                image: "/contracts.png",
                                metrics: [{
                                    label: "35% faster reviews (UX test)",
                                    color: "purple"
                                }, {
                                    label: "<3s upload simulation",
                                    color: "indigo"
                                }, {
                                    label: "Empty/error states built-in",
                                    color: "slate"
                                }],
                                technologies: ["React", "Tailwind CSS", "Context API / Redux", "Mock API", "Vercel / Netlify"],
                                liveUrl: "https://contracts-dashboard-9f2t.vercel.app/",
                                githubUrl: "https://github.com/abhishekmeena7/contracts-dashboard"
                            }, {
                                title: "Typing Speed Test",
                                description: "Lightweight WPM tester with real‑time accuracy and consistency feedback. Keyboard‑first UX and mobile‑friendly layout for quick practice sessions.",
                                image: "/typing.png",
                                metrics: [{
                                    label: "+15% accuracy with feedback",
                                    color: "amber"
                                }, {
                                    label: "Live WPM & errors",
                                    color: "cyan"
                                }, {
                                    label: "PWA‑ready UI",
                                    color: "teal"
                                }],
                                technologies: ["HTML", "CSS", "JavaScript"],
                                liveUrl: "https://typing-speed-test-opal-mu.vercel.app/",
                                githubUrl: "https://github.com/abhishekmeena7/Typing-Speed-Test"
                            }].map((e, t) => (0, r.jsxs)(a.Zp, {
                                className: "group h-full flex flex-col border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-accent/30 hover:-translate-y-0.5",
                                children: [(0, r.jsxs)("div", {
                                    className: "relative overflow-hidden rounded-t-lg",
                                    children: [(0, r.jsx)("img", {
                                        src: e.image || "/placeholder.svg",
                                        alt: e.title,
                                        className: "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105",
                                        onError: e => {
                                            e.currentTarget.src = "/placeholder.svg"
                                        }
                                    }), (0, r.jsx)("div", {
                                        className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/40 to-transparent"
                                    })]
                                }), (0, r.jsx)(a.aR, {
                                    children: (0, r.jsx)(a.ZB, {
                                        className: "text-xl font-semibold text-foreground",
                                        children: e.title
                                    })
                                }), (0, r.jsxs)(a.Wu, {
                                    className: "flex flex-col flex-1",
                                    children: [(0, r.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-muted-foreground leading-relaxed",
                                            children: e.description
                                        }), Array.isArray(e.metrics) && (0, r.jsx)("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: e.metrics.map((e, t) => (0, r.jsx)(d, {
                                                variant: "outline",
                                                className: "green" === e.color ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20" : "emerald" === e.color ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" : "blue" === e.color ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" : "purple" === e.color ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20" : "indigo" === e.color ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20" : "slate" === e.color ? "bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/20" : "amber" === e.color ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20" : "cyan" === e.color ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20" : "teal" === e.color ? "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20" : "",
                                                children: e.label
                                            }, t))
                                        }), (0, r.jsx)("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: e.technologies.map((e, t) => (0, r.jsx)(d, {
                                                variant: "outline",
                                                className: "text-xs",
                                                children: e
                                            }, t))
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "mt-auto flex gap-3 pt-4",
                                        children: [(0, r.jsx)(i.$, {
                                            size: "sm",
                                            asChild: !0,
                                            className: "cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                                            children: (0, r.jsxs)("a", {
                                                href: e.liveUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, r.jsx)(m.A, {
                                                    className: "mr-2 h-4 w-4"
                                                }), "Live Demo"]
                                            })
                                        }), (0, r.jsx)(i.$, {
                                            variant: "outline",
                                            size: "sm",
                                            asChild: !0,
                                            className: "cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                                            children: (0, r.jsxs)("a", {
                                                href: e.githubUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, r.jsx)(x.A, {
                                                    className: "mr-2 h-4 w-4"
                                                }), "Code"]
                                            })
                                        })]
                                    })]
                                })]
                            }, t))
                        })]
                    })
                })
            }
        },
        287: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => l
            });
            var r = s(1215);
            s(5591);
            var a = s(8142),
                i = s(3736),
                n = s(411);
            let o = (0, i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
                variants: {
                    variant: {
                        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-9 px-4 py-2 has-[>svg]:px-3",
                        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                        icon: "size-9"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });

            function l(e) {
                let {
                    className: t,
                    variant: s,
                    size: i,
                    asChild: l = !1,
                    ...c
                } = e, d = l ? a.DX : "button";
                return (0, r.jsx)(d, {
                    "data-slot": "button",
                    className: (0, n.cn)(o({
                        variant: s,
                        size: i,
                        className: t
                    })),
                    ...c
                })
            }
        },
        411: (e, t, s) => {
            "use strict";
            s.d(t, {
                cn: () => i
            });
            var r = s(4262),
                a = s(615);

            function i() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, a.QP)((0, r.$)(t))
            }
        },
        874: (e, t, s) => {
            "use strict";
            s.d(t, {
                HeroSection: () => x
            });
            var r = s(1215),
                a = s(287),
                i = s(9508),
                n = s(8799),
                o = s(7698),
                l = s(5915),
                c = s(5591),
                d = s(1301);

            function m() {
                let e = (0, c.useRef)(null),
                    t = (0, c.useRef)([]),
                    s = (0, c.useRef)({
                        x: 0,
                        y: 0
                    }),
                    a = (0, c.useRef)(),
                    {
                        theme: i,
                        resolvedTheme: n
                    } = (0, d.D)(),
                    [o, l] = (0, c.useState)(!1);
                return ((0, c.useEffect)(() => {
                    l(!0)
                }, []), (0, c.useEffect)(() => {
                    if (!o) return;
                    let r = e.current;
                    if (!r) return;
                    let i = r.getContext("2d");
                    if (!i) return;
                    let l = () => {
                            r.width = window.innerWidth, r.height = window.innerHeight
                        },
                        c = () => {
                            let e = [],
                                s = Math.floor(r.width * r.height / 12e3);
                            for (let t = 0; t < s; t++) e.push({
                                x: Math.random() * r.width,
                                y: Math.random() * r.height,
                                vx: (Math.random() - .5) * .8,
                                vy: (Math.random() - .5) * .8,
                                size: 3 * Math.random() + 1,
                                opacity: .6 * Math.random() + .3
                            });
                            t.current = e
                        },
                        d = () => {
                            let e = t.current,
                                a = s.current;
                            e.forEach(e => {
                                let t = a.x - e.x,
                                    s = a.y - e.y,
                                    i = Math.sqrt(t * t + s * s);
                                if (i < 200) {
                                    let r = (200 - i) / 200;
                                    e.vx += t / i * r * .05, e.vy += s / i * r * .05
                                }
                                e.x += e.vx, e.y += e.vy, (e.x < 0 || e.x > r.width) && (e.vx *= -.7, e.x = Math.max(0, Math.min(r.width, e.x))), (e.y < 0 || e.y > r.height) && (e.vy *= -.7, e.y = Math.max(0, Math.min(r.height, e.y))), e.vx *= .995, e.vy *= .995
                            })
                        },
                        m = () => {
                            i.clearRect(0, 0, r.width, r.height);
                            let e = t.current,
                                s = "dark" === n,
                                a = s ? "147, 197, 253" : "99, 102, 241",
                                o = s ? "147, 197, 253" : "99, 102, 241";
                            i.strokeStyle = "rgba(".concat(o, ", 0.2)"), i.lineWidth = 1;
                            for (let t = 0; t < e.length; t++)
                                for (let s = t + 1; s < e.length; s++) {
                                    let r = e[t].x - e[s].x,
                                        a = e[t].y - e[s].y,
                                        n = Math.sqrt(r * r + a * a);
                                    if (n < 150) {
                                        let r = (150 - n) / 150 * .25;
                                        i.strokeStyle = "rgba(".concat(o, ", ").concat(r, ")"), i.beginPath(), i.moveTo(e[t].x, e[t].y), i.lineTo(e[s].x, e[s].y), i.stroke()
                                    }
                                }
                            e.forEach(e => {
                                i.shadowColor = "rgba(".concat(a, ", 0.8)"), i.shadowBlur = 10, i.beginPath(), i.arc(e.x, e.y, e.size, 0, 2 * Math.PI), i.fillStyle = "rgba(".concat(a, ", ").concat(e.opacity, ")"), i.fill(), i.shadowBlur = 0
                            })
                        },
                        x = () => {
                            d(), m(), a.current = requestAnimationFrame(x)
                        },
                        h = e => {
                            let t = r.getBoundingClientRect();
                            s.current = {
                                x: e.clientX - t.left,
                                y: e.clientY - t.top
                            }
                        },
                        u = () => {
                            l(), c()
                        };
                    return l(), c(), x(), r.addEventListener("mousemove", h), window.addEventListener("resize", u), () => {
                        a.current && cancelAnimationFrame(a.current), r.removeEventListener("mousemove", h), window.removeEventListener("resize", u)
                    }
                }, [i, n, o]), o) ? (0, r.jsx)("canvas", {
                    ref: e,
                    className: "absolute inset-0",
                    style: {
                        zIndex: 1
                    }
                }) : null
            }

            function x() {
                return (0, r.jsxs)("section", {
                    id: "home",
                    className: "min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 pt-24 sm:pt-32 px-4",
                    children: [(0, r.jsx)(m, {}), (0, r.jsx)("div", {
                        className: "max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 text-center relative z-10",
                        children: (0, r.jsxs)("div", {
                            className: "space-y-8",
                            children: [(0, r.jsxs)("div", {
                                className: "space-y-6",
                                children: [(0, r.jsxs)("h1", {
                                    className: "text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000",
                                    children: ["Hi, I'm", " ", (0, r.jsx)("span", {
                                        className: "bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-pulse",
                                        children: "Abhishek Meena"
                                    })]
                                }), (0, r.jsx)("p", {
                                    className: "text-base sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 leading-relaxed",
                                    children: "Full-Stack Web Developer crafting exceptional digital experiences with modern technologies"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400",
                                children: (0, r.jsxs)(a.$, {
                                    onClick: () => {
                                        let e = document.getElementById("projects");
                                        e && e.scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    },
                                    size: "lg",
                                    className: "group hover:scale-105 transition-all duration-300 bg-gradient-to-r from-accent to-primary hover:shadow-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg",
                                    children: ["View My Work", (0, r.jsx)(i.A, {
                                        className: "ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform"
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: "flex justify-center space-x-6 sm:space-x-8 pt-6 sm:pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600",
                                children: [(0, r.jsxs)("a", {
                                    href: "https://github.com/abhishekmeena7",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125 p-2",
                                    children: [(0, r.jsx)(n.A, {
                                        className: "h-7 w-7"
                                    }), (0, r.jsx)("span", {
                                        className: "sr-only",
                                        children: "GitHub"
                                    })]
                                }), (0, r.jsxs)("a", {
                                    href: "https://www.linkedin.com/in/abhishek-meena-web-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125 p-2",
                                    children: [(0, r.jsx)(o.A, {
                                        className: "h-7 w-7"
                                    }), (0, r.jsx)("span", {
                                        className: "sr-only",
                                        children: "LinkedIn"
                                    })]
                                }), (0, r.jsxs)("a", {
                                    href: "https://x.com/techabhii?t=8aJkFLqwFX05O3drAbX9XA&s=09",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125 p-2",
                                    children: [(0, r.jsx)(l.A, {
                                        className: "h-7 w-7"
                                    }), (0, r.jsx)("span", {
                                        className: "sr-only",
                                        children: "Twitter / X"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        2446: (e, t, s) => {
            "use strict";
            s.d(t, {
                Wu: () => l,
                ZB: () => o,
                Zp: () => i,
                aR: () => n
            });
            var r = s(1215);
            s(5591);
            var a = s(411);

            function i(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card",
                    className: (0, a.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", t),
                    ...s
                })
            }

            function n(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card-header",
                    className: (0, a.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", t),
                    ...s
                })
            }

            function o(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card-title",
                    className: (0, a.cn)("leading-none font-semibold", t),
                    ...s
                })
            }

            function l(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card-content",
                    className: (0, a.cn)("px-6", t),
                    ...s
                })
            }
        },
        4291: (e, t, s) => {
            "use strict";
            s.d(t, {
                SkillsSection: () => a
            });
            var r = s(1215);

            function a() {
                let e = new Set(["GitHub", "Vercel", "Express.js", "Express"]);
                return (0, r.jsx)("section", {
                    id: "skills",
                    className: "py-16 px-2 sm:py-20 sm:px-4 md:px-6 lg:px-8 bg-background",
                    children: (0, r.jsxs)("div", {
                        className: "max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8",
                        children: [(0, r.jsxs)("div", {
                            className: "text-center mb-12 sm:mb-16",
                            children: [(0, r.jsx)("h2", {
                                className: "text-3xl sm:text-4xl font-bold text-foreground mb-4",
                                children: "My Skills"
                            }), (0, r.jsx)("p", {
                                className: "text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto",
                                children: "The languages and tools I've worked with throughout my projects and experience."
                            })]
                        }), (0, r.jsx)("div", {
                            className: "space-y-10 sm:space-y-12",
                            children: [{
                                title: "Front End",
                                technologies: [{
                                    name: "HTML5",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                }, {
                                    name: "CSS3",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                }, {
                                    name: "Tailwind CSS",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                }, {
                                    name: "JavaScript",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                }, {
                                    name: "React.js",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                }]
                            }, {
                                title: "Back End",
                                technologies: [{
                                    name: "Node.js",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                }, {
                                    name: "Express.js",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                }, {
                                    name: "MongoDB",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                }]
                            }, {
                                title: "Tools & Platforms",
                                technologies: [{
                                    name: "Git",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                }, {
                                    name: "GitHub",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                }, {
                                    name: "Vercel",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
                                }, {
                                    name: "Postman",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                                }, {
                                    name: "VS Code",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                }, {
                                    name: "Docker",
                                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                                }]
                            }].map((t, s) => (0, r.jsxs)("div", {
                                className: "space-y-6",
                                children: [(0, r.jsx)("h3", {
                                    className: "text-lg sm:text-xl font-semibold text-foreground",
                                    children: t.title
                                }), (0, r.jsx)("div", {
                                    className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6",
                                    children: t.technologies.map((t, s) => (0, r.jsxs)("div", {
                                        className: "flex flex-col items-center space-y-2 group cursor-pointer",
                                        children: [(0, r.jsxs)("div", {
                                            className: "w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                                            children: [(0, r.jsx)("img", {
                                                src: t.icon || "/placeholder.svg",
                                                alt: t.name,
                                                className: "w-10 h-10 sm:w-12 sm:h-12 object-contain filter ".concat(e.has(t.name) ? "dark:invert dark:brightness-125" : ""),
                                                onError: e => {
                                                    let t = e.currentTarget;
                                                    t.style.display = "none";
                                                    let s = t.nextElementSibling;
                                                    s && (s.style.display = "block")
                                                }
                                            }), (0, r.jsx)("div", {
                                                className: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold hidden",
                                                children: t.name.charAt(0)
                                            })]
                                        }), (0, r.jsx)("span", {
                                            className: "text-xs sm:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300",
                                            children: t.name
                                        })]
                                    }, s))
                                })]
                            }, s))
                        })]
                    })
                })
            }
        },
        4847: (e, t, s) => {
            "use strict";
            s.d(t, {
                ContactSection: () => w
            });
            var r = s(1215),
                a = s(5591),
                i = s(2446),
                n = s(287),
                o = s(411);

            function l(e) {
                let {
                    className: t,
                    type: s,
                    ...a
                } = e;
                return (0, r.jsx)("input", {
                    type: s,
                    "data-slot": "input",
                    className: (0, o.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", t),
                    ...a
                })
            }

            function c(e) {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("textarea", {
                    "data-slot": "textarea",
                    className: (0, o.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
                    ...s
                })
            }
            var d = s(9198),
                m = s(3337),
                x = s(2383),
                h = s(9935),
                u = s(3344),
                g = s(4538),
                p = s(9483),
                v = s(952);
            let b = "service_h6od7n2",
                f = "template_mh9t1de",
                j = "NK4s3RpS6bJUaX_QP";

            function w() {
                let [e, t] = (0, a.useState)({
                    from_name: "",
                    from_email: "",
                    message: ""
                }), [s, o] = (0, a.useState)(!1), w = (0, a.useRef)(null), y = async e => {
                    if (e.preventDefault(), !s && w.current) {
                        o(!0);
                        try {
                            if (!b || !f || !j) throw Error("EmailJS is not configured. Please provide valid keys.");
                            await p.o.promise(v.Ay.sendForm(b, f, w.current, {
                                publicKey: j
                            }), {
                                loading: (0, r.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [(0, r.jsx)(d.A, {
                                        className: "h-4 w-4 animate-spin"
                                    }), (0, r.jsx)("span", {
                                        children: "Sending your message…"
                                    })]
                                }),
                                success: () => {
                                    var e;
                                    return t({
                                        from_name: "",
                                        from_email: "",
                                        message: ""
                                    }), null === (e = w.current) || void 0 === e || e.reset(), (0, r.jsxs)("div", {
                                        className: "flex items-start gap-3",
                                        children: [(0, r.jsx)("span", {
                                            className: "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent/80 via-primary/70 to-accent/80 text-accent-foreground shadow-inner shadow-black/40",
                                            children: (0, r.jsx)(m.A, {
                                                className: "h-4 w-4"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "pt-0.5",
                                            children: [(0, r.jsx)("p", {
                                                className: "font-medium tracking-tight",
                                                children: "Message sent"
                                            }), (0, r.jsx)("p", {
                                                className: "text-xs opacity-70",
                                                children: "Thanks! I’ll get back to you soon."
                                            })]
                                        })]
                                    })
                                },
                                error: e => (0, r.jsxs)("div", {
                                    className: "flex items-start gap-3",
                                    children: [(0, r.jsx)("span", {
                                        className: "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-500/80 to-red-400/70 text-white shadow-inner shadow-black/40",
                                        children: (0, r.jsx)(x.A, {
                                            className: "h-4 w-4"
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "pt-0.5",
                                        children: [(0, r.jsx)("p", {
                                            className: "font-medium tracking-tight",
                                            children: "Failed to send"
                                        }), (0, r.jsx)("p", {
                                            className: "text-xs opacity-70",
                                            children: (null == e ? void 0 : e.message) || "Please try again later."
                                        })]
                                    })]
                                }),
                                className: "backdrop-blur-xl bg-background/85 dark:bg-background/80 border border-accent/20 shadow-[0_8px_30px_rgb(0_0_0/0.4)] rounded-xl ring-1 ring-accent/10",
                                duration: 4500
                            })
                        } catch (e) {
                            console.error("EmailJS error", e)
                        } finally {
                            o(!1)
                        }
                    }
                }, N = e => {
                    let {
                        name: s,
                        value: r
                    } = e.target;
                    t(e => ({ ...e,
                        [s]: r
                    }))
                };
                return (0, r.jsx)("section", {
                    id: "contact",
                    className: "py-16 px-2 sm:py-20 sm:px-4 md:px-6 lg:px-8 bg-background",
                    children: (0, r.jsxs)("div", {
                        className: "max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8",
                        children: [(0, r.jsxs)("div", {
                            className: "text-center mb-12 sm:mb-16",
                            children: [(0, r.jsx)("h2", {
                                className: "text-3xl sm:text-4xl font-bold text-foreground mb-4",
                                children: "Get In Touch"
                            }), (0, r.jsx)("p", {
                                className: "text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto",
                                children: "Ready to start your next project? Let's discuss how we can work together"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12",
                            children: [(0, r.jsxs)("div", {
                                className: "space-y-8",
                                children: [(0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("h3", {
                                        className: "text-2xl font-semibold text-foreground mb-6",
                                        children: "Let's Connect"
                                    }), (0, r.jsx)("p", {
                                        className: "text-muted-foreground leading-relaxed mb-8",
                                        children: "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you!"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center space-x-4",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: (0, r.jsx)(h.A, {
                                                className: "h-6 w-6 text-accent"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                className: "text-foreground font-medium",
                                                children: "Email"
                                            }), (0, r.jsx)("p", {
                                                className: "text-muted-foreground break-all",
                                                children: "abhishekmeena5623@gmail.com"
                                            })]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center space-x-4",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: (0, r.jsx)(u.A, {
                                                className: "h-6 w-6 text-accent"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                className: "text-foreground font-medium",
                                                children: "Location"
                                            }), (0, r.jsx)("p", {
                                                className: "text-muted-foreground",
                                                children: "India"
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, r.jsxs)(i.Zp, {
                                children: [(0, r.jsx)(i.aR, {
                                    children: (0, r.jsx)(i.ZB, {
                                        children: "Send a Message"
                                    })
                                }), (0, r.jsx)(i.Wu, {
                                    children: (0, r.jsxs)("form", {
                                        ref: w,
                                        onSubmit: y,
                                        className: "space-y-6",
                                        children: [(0, r.jsx)("input", {
                                            type: "hidden",
                                            name: "to_email",
                                            value: "abhishekmeena5623@gmail.com"
                                        }), (0, r.jsx)("input", {
                                            type: "hidden",
                                            name: "reply_to",
                                            value: e.from_email
                                        }), (0, r.jsx)("div", {
                                            children: (0, r.jsx)(l, {
                                                name: "from_name",
                                                placeholder: "Your Name",
                                                value: e.from_name,
                                                onChange: N,
                                                required: !0,
                                                suppressHydrationWarning: !0
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: (0, r.jsx)(l, {
                                                name: "from_email",
                                                type: "email",
                                                placeholder: "Your Email",
                                                value: e.from_email,
                                                onChange: N,
                                                required: !0,
                                                suppressHydrationWarning: !0
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: (0, r.jsx)(c, {
                                                name: "message",
                                                placeholder: "Your Message",
                                                rows: 5,
                                                value: e.message,
                                                onChange: N,
                                                required: !0,
                                                suppressHydrationWarning: !0
                                            })
                                        }), (0, r.jsxs)(n.$, {
                                            type: "submit",
                                            className: "w-full",
                                            disabled: s,
                                            suppressHydrationWarning: !0,
                                            children: [(0, r.jsx)(g.A, {
                                                className: "mr-2 h-4 w-4"
                                            }), s ? "Sending..." : "Send Message"]
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        6602: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 6972)), Promise.resolve().then(s.bind(s, 4847)), Promise.resolve().then(s.bind(s, 874)), Promise.resolve().then(s.bind(s, 7084)), Promise.resolve().then(s.bind(s, 28)), Promise.resolve().then(s.bind(s, 4291))
        },
        6972: (e, t, s) => {
            "use strict";
            s.d(t, {
                AboutSection: () => a
            });
            var r = s(1215);

            function a() {
                let e = new Set(["GitHub", "Vercel", "Express.js", "Express"]);
                return (0, r.jsx)("section", {
                    id: "about",
                    className: "py-12 px-2 sm:py-16 sm:px-4 md:px-6 lg:px-8 via-muted/20  relative overflow-hidden",
                    children: (0, r.jsxs)("div", {
                        className: "max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10",
                        children: [(0, r.jsxs)("div", {
                            className: "text-center mb-12 sm:mb-20",
                            children: [(0, r.jsxs)("div", {
                                className: "inline-block",
                                children: [(0, r.jsx)("h2", {
                                    className: "text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4 sm:mb-6",
                                    children: "About Me"
                                }), (0, r.jsx)("div", {
                                    className: "w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6"
                                })]
                            }), (0, r.jsx)("p", {
                                className: "text-base sm:text-xl text-muted-foreground max-w-2xl md:max-w-3xl mx-auto leading-relaxed",
                                children: "Passionate full-stack developer crafting innovative web solutions that bridge creativity and functionality"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",
                            children: [(0, r.jsx)("div", {
                                className: "space-y-8",
                                children: (0, r.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl"
                                    }), (0, r.jsxs)("div", {
                                        className: "relative bg-background/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-border/50",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex items-center mb-6 sm:mb-8",
                                            children: [(0, r.jsx)("div", {
                                                className: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-black rounded-lg flex items-center justify-center mr-3 sm:mr-4",
                                                children: (0, r.jsx)("svg", {
                                                    className: "w-6 h-6 text-white",
                                                    fill: "none",
                                                    stroke: "white",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                                    })
                                                })
                                            }), (0, r.jsx)("h3", {
                                                className: "text-xl sm:text-2xl font-bold text-foreground",
                                                children: "Tech Stack"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "grid grid-cols-2 xs:grid-cols-3 gap-4 sm:gap-6",
                                            children: [(0, r.jsxs)("div", {
                                                className: "group relative",
                                                children: [(0, r.jsx)("div", {
                                                    className: "absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }), (0, r.jsxs)("div", {
                                                    className: "relative flex flex-col items-center p-2 sm:p-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-green-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300",
                                                        children: (0, r.jsx)("img", {
                                                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                                                            alt: "MongoDB",
                                                            className: "w-8 h-8 sm:w-12 sm:h-12 object-contain filter ".concat(e.has("MongoDB") ? "dark:invert dark:brightness-125" : ""),
                                                            onError: e => {
                                                                let t = e.currentTarget;
                                                                t.style.display = "none";
                                                                let s = t.nextElementSibling;
                                                                s && (s.style.display = "block")
                                                            }
                                                        })
                                                    }), (0, r.jsx)("span", {
                                                        className: "text-xs sm:text-sm font-semibold text-center group-hover:text-green-500 transition-colors",
                                                        children: "MongoDB"
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "group relative",
                                                children: [(0, r.jsx)("div", {
                                                    className: "absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }), (0, r.jsxs)("div", {
                                                    className: "relative flex flex-col items-center p-2 sm:p-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-gray-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300",
                                                        children: (0, r.jsx)("img", {
                                                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                                                            alt: "Express.js",
                                                            className: "w-8 h-8 sm:w-12 sm:h-12 object-contain filter ".concat(e.has("Express.js") ? "dark:invert dark:brightness-125" : ""),
                                                            onError: e => {
                                                                let t = e.currentTarget;
                                                                t.style.display = "none";
                                                                let s = t.nextElementSibling;
                                                                s && (s.style.display = "block")
                                                            }
                                                        })
                                                    }), (0, r.jsx)("span", {
                                                        className: "text-xs sm:text-sm font-semibold text-center group-hover:text-gray-400 transition-colors",
                                                        children: "Express.js"
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "group relative",
                                                children: [(0, r.jsx)("div", {
                                                    className: "absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }), (0, r.jsxs)("div", {
                                                    className: "relative flex flex-col items-center p-2 sm:p-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-blue-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300",
                                                        children: (0, r.jsx)("img", {
                                                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                                                            alt: "React",
                                                            className: "w-8 h-8 sm:w-12 sm:h-12 object-contain filter ".concat(e.has("React") ? "dark:invert dark:brightness-125" : ""),
                                                            onError: e => {
                                                                let t = e.currentTarget;
                                                                t.style.display = "none";
                                                                let s = t.nextElementSibling;
                                                                s && (s.style.display = "block")
                                                            }
                                                        })
                                                    }), (0, r.jsx)("span", {
                                                        className: "text-xs sm:text-sm font-semibold text-center group-hover:text-blue-400 transition-colors",
                                                        children: "React"
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "group relative",
                                                children: [(0, r.jsx)("div", {
                                                    className: "absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }), (0, r.jsxs)("div", {
                                                    className: "relative flex flex-col items-center p-2 sm:p-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-green-600/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300",
                                                        children: (0, r.jsx)("img", {
                                                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                                                            alt: "Node.js",
                                                            className: "w-8 h-8 sm:w-12 sm:h-12 object-contain filter ".concat(e.has("Node.js") ? "dark:invert dark:brightness-125" : ""),
                                                            onError: e => {
                                                                let t = e.currentTarget;
                                                                t.style.display = "none";
                                                                let s = t.nextElementSibling;
                                                                s && (s.style.display = "block")
                                                            }
                                                        })
                                                    }), (0, r.jsx)("span", {
                                                        className: "text-xs sm:text-sm font-semibold text-center group-hover:text-green-400 transition-colors",
                                                        children: "Node.js"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "relative flex justify-center mt-10 lg:mt-0",
                                children: (0, r.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-48 h-48 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 p-2 sm:p-3 shadow-2xl ",
                                        children: (0, r.jsxs)("div", {
                                            className: "w-full h-full rounded-full overflow-hidden bg-background border-4 border-background shadow-inner relative",
                                            children: [(0, r.jsx)("img", {
                                                src: "/professional-developer-headshot.jpg",
                                                alt: "Web Developer",
                                                className: "w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                            }), (0, r.jsx)("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "absolute -top-6 -right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-full animate-bounce shadow-lg flex items-center justify-center",
                                        children: (0, r.jsxs)("svg", {
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            className: "w-6 h-6 sm:w-7 sm:h-7",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, r.jsx)("title", {
                                                children: "JavaScript"
                                            }), (0, r.jsx)("path", {
                                                d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "absolute -bottom-6 -left-6 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-black-500 to-black-500 rounded-full animate-bounce delay-1000 shadow-lg flex items-center justify-center",
                                        children: (0, r.jsx)("svg", {
                                            viewBox: "0 0 24 24",
                                            className: "w-4 h-4 sm:w-5 sm:h-5",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.48C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z"
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "absolute top-1/2 -left-8 sm:-left-10 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-500 to-red-500 rounded-full animate-bounce delay-500 shadow-lg flex items-center justify-center",
                                        children: (0, r.jsxs)("svg", {
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            className: "w-4 h-4 sm:w-5 sm:h-5",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, r.jsx)("title", {
                                                children: "Git"
                                            }), (0, r.jsx)("path", {
                                                d: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "absolute top-1/4 -right-6 sm:-right-8 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full animate-bounce delay-700 shadow-lg flex items-center justify-center",
                                        children: (0, r.jsxs)("svg", {
                                            role: "img",
                                            viewBox: "0 0 24 24",
                                            className: "w-4 h-4 sm:w-5 sm:h-5",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, r.jsx)("title", {
                                                children: "GitHub Copilot"
                                            }), (0, r.jsx)("path", {
                                                d: "M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        7084: (e, t, s) => {
            "use strict";
            s.d(t, {
                Navigation: () => x
            });
            var r = s(1215),
                a = s(5591),
                i = s(287),
                n = s(916),
                o = s(5128),
                l = s(598),
                c = s(9841),
                d = s(1301);

            function m() {
                let {
                    theme: e,
                    setTheme: t,
                    resolvedTheme: s
                } = (0, d.D)(), [n, o] = (0, a.useState)(!1);
                return ((0, a.useEffect)(() => {
                    o(!0)
                }, []), n) ? (0, r.jsxs)(i.$, {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => {
                        t("light" === s ? "dark" : "light")
                    },
                    className: "relative hover:bg-accent/20 transition-all duration-300",
                    children: [(0, r.jsx)(l.A, {
                        className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    }), (0, r.jsx)(c.A, {
                        className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    }), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: "Toggle theme"
                    })]
                }) : (0, r.jsxs)(i.$, {
                    variant: "ghost",
                    size: "icon",
                    className: "relative",
                    children: [(0, r.jsx)(l.A, {
                        className: "h-[1.2rem] w-[1.2rem]"
                    }), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: "Toggle theme"
                    })]
                })
            }

            function x() {
                let [e, t] = (0, a.useState)(!1), [s, l] = (0, a.useState)("home"), [c, d] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = () => {
                        window.scrollY > 16 ? d(!0) : d(!1);
                        let e = window.scrollY + 100;
                        for (let t of ["home", "about", "skills", "projects", "contact"]) {
                            let s = document.getElementById(t);
                            if (s) {
                                let r = s.offsetTop,
                                    a = s.offsetHeight;
                                if (e >= r && e < r + a) {
                                    l(t);
                                    break
                                }
                            }
                        }
                    };
                    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }, []);
                let x = e => {
                        let s = document.getElementById(e);
                        s && s.scrollIntoView({
                            behavior: "smooth"
                        }), t(!1)
                    },
                    h = [{
                        id: "home",
                        label: "Home"
                    }, {
                        id: "about",
                        label: "About"
                    }, {
                        id: "skills",
                        label: "Skills"
                    }, {
                        id: "projects",
                        label: "Projects"
                    }, {
                        id: "contact",
                        label: "Contact"
                    }];
                return (0, r.jsx)("nav", {
                    className: "fixed left-0 right-0 z-50 pointer-events-auto transition-all duration-300 flex justify-center ".concat(c ? "top-0" : "top-6"),
                    children: (0, r.jsxs)("div", {
                        className: "w-full px-4 sm:px-6 lg:px-8 transition-all duration-300",
                        children: [(0, r.jsxs)("div", {
                            className: "mx-auto flex items-center justify-between transition-all duration-300 ".concat(c ? "w-full max-w-7xl h-16 px-4 py-3 bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "w-full max-w-3xl md:max-w-4xl px-4 py-2 rounded-[9999px] bg-white/30 dark:bg-white/6 backdrop-blur-md border border-white/10 dark:border-white/6 shadow-2xl"),
                            children: [(0, r.jsx)("div", {
                                className: "font-bold text-xl text-foreground",
                                children: "Portfolio"
                            }), (0, r.jsxs)("div", {
                                className: "hidden md:flex items-center space-x-8",
                                children: [h.map(e => (0, r.jsx)("button", {
                                    onClick: () => x(e.id),
                                    className: "text-sm font-medium transition-colors hover:text-accent ".concat(s === e.id ? "text-accent" : "text-muted-foreground"),
                                    children: e.label
                                }, e.id)), (0, r.jsx)(m, {})]
                            }), (0, r.jsxs)("div", {
                                className: "md:hidden flex items-center space-x-2",
                                children: [(0, r.jsx)(m, {}), (0, r.jsx)(i.$, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: () => t(!e),
                                    children: e ? (0, r.jsx)(n.A, {
                                        className: "h-5 w-5"
                                    }) : (0, r.jsx)(o.A, {
                                        className: "h-5 w-5"
                                    })
                                })]
                            })]
                        }), e && (0, r.jsx)("div", {
                            className: "md:hidden",
                            children: (0, r.jsx)("div", {
                                className: "px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border",
                                children: h.map(e => (0, r.jsx)("button", {
                                    onClick: () => x(e.id),
                                    className: "block px-3 py-2 text-base font-medium transition-colors hover:text-accent ".concat(s === e.id ? "text-accent" : "text-muted-foreground"),
                                    children: e.label
                                }, e.id))
                            })
                        })]
                    })
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [76, 893, 403, 255, 358], () => t(6602)), _N_E = e.O()
    }
]);