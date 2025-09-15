---
author: Ravindra Verma
color-scheme: dark
creator: Ravindra Verma
description: Build a blazing fast markdown blog using Next.js and MDX
  with this complete walkthrough.
keywords: Ravindra Verma,Frontend Developer,Full-Stack Developer,Web
  Developer,Freelancer,Next.js,Sanity CMS,Software Engineer,Tech Content
  Creator,React Developer,Open Source Contributor,TypeScript
lang: en
theme-color: black
title: How to Build a Blog with Next.js and MDX \| Ravindra Verma \|
  Ravindra Verma
twitter:card: summary_large_image
twitter:description: Build a blazing fast markdown blog using Next.js
  and MDX with this complete walkthrough.
twitter:image: "https://aayushbharti.in/blog/how-to-build-a-blog-with-nextjs-and-mdx/cover.webp"
twitter:title: How to Build a Blog with Next.js and MDX \| Ravindra Verma
viewport: width=device-width, initial-scale=1, viewport-fit=cover
---

::: {hidden=""}
:::

::: {.relative .z-[9999]}
:::

::: {.pointer-events-none .fixed .top-0 .left-1/2 .z-40 .h-24 .w-full .-translate-x-1/2}
::: {.absolute .inset-0 .overflow-hidden}
::: {.pointer-events-none .absolute .inset-0 .z-10 .opacity-100 style="backdrop-filter:blur(3px);mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%);-webkit-mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)"}
:::

::: {.pointer-events-none .absolute .inset-0 .z-20 .opacity-100 style="backdrop-filter:blur(5px);mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%);-webkit-mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%)"}
:::
:::
:::

[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2l6ZS1bMzVweF0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld2JveD0iMCAwIDUzNTAgNTM1MCI+CiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0iZmlsbC1ibGFjayBkYXJrOmZpbGwtd2hpdGUiIGQ9Ik0yNjUgNDA2OWMtNzAtMjAtNzEtNTktNC0xOTcgMjktNTkgNzgtMTYxIDEwOS0yMjcgMzItNjYgODUtMTc4IDExOS0yNDggNzctMTU5IDE2Ny0zNDcgMjM2LTQ5MiAyOS02MCA4MS0xNjggMTE1LTI0MCAzNC03MSA3OS0xNjYgMTAwLTIxMCAyMS00NCA2Mi0xMzIgOTMtMTk1IDMwLTYzIDEwMS0yMTIgMTU3LTMzMCAyNDAtNTA0IDMxMS02NTIgMzczLTc4MCAzNS03NCAxMDEtMjEwIDE0NS0zMDMgOTAtMTg2IDk2LTE5MyAxODYtMTg0IDU4IDUgNzYgMjMgMTI0IDEyMSAzNDEgNjkzIDQ2MiA5NDYgNDYyIDk2OCAwIDEwIDMgMTggOCAxOCA0IDAgMTcgMTkgMjkgNDIgMjcgNTIgMjI5IDQ2OSAyODggNTkzIDIzIDUwIDg4IDE4MiAxNDMgMjk1IDU1IDExMyAxNjUgMzQwIDI0NSA1MDUgODAgMTY1IDE4OCAzODkgMjQxIDQ5OSA1MyAxMDkgMTAzIDIxNCAxMTIgMjM1IDE4IDQ0IDExIDkxLTE3IDExNy0yMCAxOC00MSAxOS0zMDMgMTktMjgxIDAtMjgxIDAtMzQ0LTI5LTExMC01MS0xMzItODQtMzQ3LTUyMS0xMDYtMjE0LTMwMy02MTMtNDM3LTg4Ni0xMzUtMjczLTI1MS00OTktMjU3LTUwMy0xOS0xMi0zOSAxMS03MyA4My0xNyAzNi04NSAxNzYtMTUxIDMxMS02NiAxMzUtMTM0IDI3Ny0xNTIgMzE1LTE4IDM5LTY1IDEzOC0xMDUgMjIwLTgyIDE2OS0xNjYgMzQ0LTI1MCA1MjAtMTUzIDMyMy0xODEgMzczLTIzMCA0MTktNzMgNjgtMTEyIDc2LTM2OSA3NS0xMTkgMC0yMjktNS0yNDYtMTB6Ij4KICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJmaWxsLWJsYWNrIGRhcms6ZmlsbC13aGl0ZSIgZD0iTTM5MjIgMzk5OWMtNDItMjEtNDctMjktMTM0LTIwOC0xNDMtMjkzLTE0OC0zMTAtMTA3LTM0NyAxOS0xNyA0My0yMCAyNTMtMjQgMjc0LTcgMzA4LTE2IDQwNi0xMDcgMjA5LTE5MyAxNjYtNTUxLTgyLTY5Ni0xMDAtNTgtMTY4LTY3LTUyMC02Ny0zNDQgMC0zNzAtMy00MDMtNTMtOS0xNC01NC0xMDctMTAxLTIwNi05Mi0yMDAtMTAxLTIzNy01OS0yNjkgMjQtMTkgNDUtMjAgMzczLTI0IDM0Ny00IDM0Ny00IDQyMi0zOSAxMzctNjUgMjEwLTE3NSAyMTAtMzE3IDAtMTc2LTEwMi0zMDgtMjY3LTM0OC00Ni0xMC0xODItMTMtNjQyLTE0LTU4NCAwLTU4NCAwLTYxOC0zOC0zMC0zMi05My0xNTUtMjM0LTQ2MC0zNy04MC0zOC0xMjQtMy0xNTEgMjYtMjEgMzMtMjEgNzg4LTIxIDcwOCAwIDc2OSAxIDg3NiAyMCAyMzggNDAgNDA5IDExOSA1NjUgMjYyIDEyMCAxMDkgMjIxIDI3OCAyNjYgNDQzIDQ1IDE2OSAzNCAzODgtMjggNTU3LTMwIDgxLTEwNCAxOTctMTU3IDI0Ny0yMCAxOS0zNiA0My0zNiA1MiAwIDEwIDMyIDQwIDc4IDcyIDMwOSAyMTcgNDQ1IDU0NCAzODggOTI3LTY2IDQzNS00MTMgNzcwLTg1MSA4MjAtNDkgNS0xNDYgMTAtMjE1IDEwLTEwOCAwLTEzMS0zLTE2OC0yMXoiPgogICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICA8L3N2Zz4=){.size-[35px]}](../index.html){.Oanimate-fadeInLeft
.size-8 .p-1 .drop-shadow-xl .delay-200 .md:size-9}

::: {.justify-center .absolute .top-1/2 .left-1/2 .hidden .w-fit .-translate-x-1/2 .-translate-y-1/2 .rounded-full .backdrop-blur-md .md:flex}
-   [Home](../index.html){.block .px-4 .py-1.5 .text-sm .font-light
    .text-black .transition .hover:text-black/80 .dark:text-white/70
    .dark:hover:text-white}

-   [About](../about.html){.block .px-4 .py-1.5 .text-sm .font-light
    .text-black .transition .hover:text-black/80 .dark:text-white/70
    .dark:hover:text-white}

-   [Work](../projects.html){.block .px-4 .py-1.5 .text-sm .font-light
    .text-black .transition .hover:text-black/80 .dark:text-white/70
    .dark:hover:text-white}

-   [Blog](../blog.html){.block .px-4 .py-1.5 .text-sm .font-light
    .text-black .transition .hover:text-black/80 .dark:text-white/70
    .dark:hover:text-white}[ ]{.bg-primary/5 .absolute .inset-0 .-z-10
    .w-full .rounded-full}

    ::: {.bg-primary .absolute .-top-[9px] .left-1/2 .h-1 .w-8 .-translate-x-1/2 .rounded-t-full}
    ::: {.bg-primary/20 .absolute .-top-2 .-left-2 .h-6 .w-12 .rounded-full .blur-md}
    :::

    ::: {.bg-primary/20 .absolute .-top-1 .h-6 .w-8 .rounded-full .blur-md}
    :::

    ::: {.bg-primary/20 .absolute .top-0 .left-2 .h-4 .w-4 .rounded-full .blur-sm}
    :::
    :::

-   ::: {style="position:relative"}
    -   More
    :::

    ::: {.absolute .top-full .left-1/2 .isolate .z-50 .flex .-translate-x-1/2 .justify-center}
    :::

-   Book a Call

    ::: {.absolute .bottom-0 .h-1/3 .w-full .-translate-x-4 .rounded-full .bg-black .opacity-30 .blur-sm .dark:bg-white aria-hidden="true"}
    :::
:::

::: {.Oanimate-fadeInRight .flex .items-center .gap-2 .delay-200}
![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0icG9pbnRlci1ldmVudHMtbm9uZSBtZDpoaWRkZW4gc2l6ZS02IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdib3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00IDEyTDIwIDEyIiBjbGFzcz0ib3JpZ2luLWNlbnRlciAtdHJhbnNsYXRlLXktWzdweF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIFt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjUsLjg1LC4yNSwxLjEpXSBncm91cC1hcmlhLWV4cGFuZGVkOnRyYW5zbGF0ZS14LTAgZ3JvdXAtYXJpYS1leHBhbmRlZDp0cmFuc2xhdGUteS0wIGdyb3VwLWFyaWEtZXhwYW5kZWQ6cm90YXRlLVszMTVkZWddIj4KICAgICAgICAgICAgICAgICAgICA8L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQgMTJIMjAiIGNsYXNzPSJvcmlnaW4tY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBbdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41LC44NSwuMjUsMS44KV0gZ3JvdXAtYXJpYS1leHBhbmRlZDpyb3RhdGUtNDUiPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCAxMkgyMCIgY2xhc3M9Im9yaWdpbi1jZW50ZXIgdHJhbnNsYXRlLXktWzdweF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIFt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjUsLjg1LC4yNSwxLjEpXSBncm91cC1hcmlhLWV4cGFuZGVkOnRyYW5zbGF0ZS15LTAgZ3JvdXAtYXJpYS1leHBhbmRlZDpyb3RhdGUtWzEzNWRlZ10iPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.pointer-events-none
.md:hidden
.size-6}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvbW1hbmQgbXgtMCBoaWRkZW4gc2l6ZS01IG1kOmJsb2NrIiBhcmlhLWhpZGRlbj0idHJ1ZSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1IDZ2MTJhMyAzIDAgMSAwIDMtM0g2YTMgMyAwIDEgMCAzIDNWNmEzIDMgMCAxIDAtMyAzaDEyYTMgMyAwIDEgMC0zLTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide
.lucide-command .mx-0 .hidden .size-5 .md:block}
:::

::: {.flex .min-h-screen .items-center .justify-center .bg-white .text-black .dark:bg-black .dark:text-white}
::: {.flex .flex-col .items-center .gap-4}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJtci0yIHNpemUtNCBhbmltYXRlLXNwaW4iPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIxIDEyYTkgOSAwIDEgMS02LjIxOS04LjU2Ij48L3BhdGg+CiAgICAgICAgICAgIDwvc3ZnPg==){.mr-2
.size-4 .animate-spin}[Loading\...]{.text-xl}
:::
:::

## Contact Drawer {#radix-_R_kkdbH1_ .text-lg .leading-none .font-semibold .sr-only data-slot="dialog-title"}

::: {.flex .items-center .justify-center .p-4}
::: {.size-8 .animate-spin .rounded-full .border-y-2 .border-gray-900 .dark:border-gray-100}
:::
:::

::: {.flex .items-center .justify-center .p-4}
::: {.size-8 .animate-spin .rounded-full .border-y-2 .border-gray-900 .dark:border-gray-100}
:::
:::

::: {.section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"}
:::

::: {#S:0 hidden=""}
::: {.relative .mx-auto .w-full role="main"}
::: {.absolute .inset-0 .z-[-1] .h-[400px] .w-full .overflow-hidden style="mask-image:linear-gradient(rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 100%);opacity:1"}
![How to Build a Blog with Next.js and
MDX](../_next/cover.jpg){.halftone .pointer-events-none .absolute
.inset-0 .z-[-1] .h-[300px] .w-full .object-cover .mix-blend-overlay
.select-none loading="lazy" decoding="async" nimg="fill"
style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
sizes="100vw"
srcset="../_next/cover.jpg 320w, ../_next/cover.jpg 420w, ../_next/cover.jpg 768w, ../_next/cover.jpg 1024w, ../_next/cover.jpg 1200w"}
:::

::: {.relative .pt-72}
:::

::: {#nd-docs-layout .flex .flex-1 .flex-col .transition-[margin] .xl:[--fd-toc-width:286px] role="main" style="margin-inline-start:var(--fd-sidebar-width)"}
::: {#nd-page .flex .flex-1 .mx-auto .w-full style="padding-top:calc(var(--fd-nav-height) + var(--fd-tocnav-height));max-width:min(var(--fd-page-width),calc(var(--fd-layout-width) - var(--fd-sidebar-width)))"}
::: {.flex .flex-col .gap-y-4}
::: {.flex .flex-wrap .gap-x-2 .gap-y-1 .text-xs .md:text-sm}
[typescript]{.inline-flex .items-center .justify-center .border .w-fit
.whitespace-nowrap .shrink-0 .gap-2 .[&>svg]:pointer-events-none
.focus-visible:border-ring .focus-visible:ring-ring/50
.focus-visible:ring-[3px] .aria-invalid:ring-destructive/20
.dark:aria-invalid:ring-destructive/40 .aria-invalid:border-destructive
.transition-[color,box-shadow] .overflow-hidden .text-black
.dark:text-white .border-white-3 .dark:bg-neutral-900
.dark:border-white/[0.14] .bg-white-2 .[a&]:hover:bg-primary/90
.rounded-sm .px-1.5 .py-0.5 .text-xs
data-slot="badge"}[nextjs]{.inline-flex .items-center .justify-center
.border .w-fit .whitespace-nowrap .shrink-0 .gap-2
.[&>svg]:pointer-events-none .focus-visible:border-ring
.focus-visible:ring-ring/50 .focus-visible:ring-[3px]
.aria-invalid:ring-destructive/20 .dark:aria-invalid:ring-destructive/40
.aria-invalid:border-destructive .transition-[color,box-shadow]
.overflow-hidden .text-black .dark:text-white .border-white-3
.dark:bg-neutral-900 .dark:border-white/[0.14] .bg-white-2
.[a&]:hover:bg-primary/90 .rounded-sm .px-1.5 .py-0.5 .text-xs
data-slot="badge"}[mdx]{.inline-flex .items-center .justify-center
.border .w-fit .whitespace-nowrap .shrink-0 .gap-2
.[&>svg]:pointer-events-none .focus-visible:border-ring
.focus-visible:ring-ring/50 .focus-visible:ring-[3px]
.aria-invalid:ring-destructive/20 .dark:aria-invalid:ring-destructive/40
.aria-invalid:border-destructive .transition-[color,box-shadow]
.overflow-hidden .text-black .dark:text-white .border-white-3
.dark:bg-neutral-900 .dark:border-white/[0.14] .bg-white-2
.[a&]:hover:bg-primary/90 .rounded-sm .px-1.5 .py-0.5 .text-xs
data-slot="badge"}
:::

# How to Build a Blog with Next.js and MDX {#how-to-build-a-blog-with-next.js-and-mdx .text-3xl .font-bold .md:text-4xl}

Build a blazing fast markdown blog using Next.js and MDX with this
complete walkthrough.

::: {.flex .justify-between .border-b .pb-3 .text-sm .text-white/70}
::: {.my-2 .flex .gap-3 aria-label="Author"}
![Author logo](../aayush.webp){.size-10 .rounded-full}

::: {.gap-px .text-sm}
Ravindra Verma

Mar 12, 2025 (5 mo ago)
:::
:::

[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2stb3BlbiIgYXJpYS1oaWRkZW49InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyIDd2MTQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zIDE4YTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xaDVhNCA0IDAgMCAxIDQgNCA0IDQgMCAwIDEgNC00aDVhMSAxIDAgMCAxIDEgMXYxM2ExIDEgMCAwIDEtMSAxaC02YTMgMyAwIDAgMC0zIDMgMyAzIDAgMCAwLTMtM3oiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=){.lucide
.lucide-book-open}14 min read]{.flex .items-center .gap-2}
:::
:::

::: prose
## [Preface](#preface){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#preface .flex .scroll-m-28 .flex-row .items-center .gap-2}

Creating a blog with
[Next.js](https://github.com/vercel/next.js){rel="noreferrer noopener"
target="_blank"} and [MDX](https://mdxjs.com/){rel="noreferrer noopener"
target="_blank"} is a fast, scalable solution for developers who want
full control over content and styling. This guide walks you through
building a statically-generated blog with markdown content and dynamic
routing---using a clean, modular structure.

::: {.flex .gap-2 .my-4 .rounded-xl .border .bg-fd-card .p-3 .ps-1 .text-sm .text-fd-card-foreground .shadow-md style="--callout-color:var(--color-fd-info, var(--color-fd-muted))"}
::: {.w-0.5 .bg-(--callout-color)/50 .rounded-sm role="none"}
:::

![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS01IC1tZS0wLjUgZmlsbC0oLS1jYWxsb3V0LWNvbG9yKSB0ZXh0LWZkLWNhcmQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiAxNnYtNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIgOGguMDEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=){.lucide
.size-5 .-me-0.5 .fill-(--callout-color) .text-fd-card}

::: {.flex .flex-col .gap-2 .min-w-0 .flex-1}
This blog uses:

::: {.text-fd-muted-foreground .prose-no-margin .empty:hidden}
-   [Next.js](https://github.com/vercel/next.js){rel="noreferrer noopener"
    target="_blank"} for static site generation
-   [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote){rel="noreferrer noopener"
    target="_blank"} to parse MDX content
-   [gray-matter](https://github.com/jonschlinkert/gray-matter){rel="noreferrer noopener"
    target="_blank"} to extract frontmatter
:::
:::
:::

## [Getting Started](#getting-started){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#getting-started .flex .scroll-m-28 .flex-row .items-center .gap-2}

::: fd-steps
::: fd-step
### [1. Create a Next.js App](#1-create-a-nextjs-app){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAgMTNhNSA1IDAgMCAwIDcuNTQuNTRsMy0zYTUgNSAwIDAgMC03LjA3LTcuMDdsLTEuNzIgMS43MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCAxMWE1IDUgMCAwIDAtNy41NC0uNTRsLTMgM2E1IDUgMCAwIDAgNy4wNyA3LjA3bDEuNzEtMS43MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#1-create-a-nextjs-app .flex .scroll-m-28 .flex-row .items-center .gap-2}

::: {.flex .text-fd-muted-foreground .items-center .gap-2 .ps-3 .h-9.5}
::: [&_svg]:size-3.5
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibSA0LDQgYSAxLDEgMCAwIDAgLTAuNzA3MDMxMiwwLjI5Mjk2ODcgMSwxIDAgMCAwIDAsMS40MTQwNjI1IEwgOC41ODU5Mzc1LDExIDMuMjkyOTY4OCwxNi4yOTI5NjkgYSAxLDEgMCAwIDAgMCwxLjQxNDA2MiAxLDEgMCAwIDAgMS40MTQwNjI0LDAgbCA1Ljk5OTk5OTgsLTYgYSAxLjAwMDEsMS4wMDAxIDAgMCAwIDAsLTEuNDE0MDYyIEwgNC43MDcwMzEyLDQuMjkyOTY4NyBBIDEsMSAwIDAgMCA0LDQgWiBtIDgsMTQgYSAxLDEgMCAwIDAgLTEsMSAxLDEgMCAwIDAgMSwxIGggOCBhIDEsMSAwIDAgMCAxLC0xIDEsMSAwIDAgMCAtMSwtMSB6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+)
:::

Terminal

::: empty:hidden
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgeD0iOCIgeT0iOCIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQgMTZjLTEuMSAwLTItLjktMi0yVjRjMC0xLjEuOS0yIDItMmgxMGMxLjEgMCAyIC45IDIgMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide}
:::
:::

::: {.bg-fd-secondary .rounded-lg .border .text-[13px] .py-3.5 .overflow-auto .max-h-[600px] .fd-scroll-container}
``` {.min-w-full .w-max .*:flex .*:flex-col}
yarn create next-app nextjs-mdx-blog
```
:::
:::

::: fd-step
### [2. Install Required Packages](#2-install-required-packages){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAgMTNhNSA1IDAgMCAwIDcuNTQuNTRsMy0zYTUgNSAwIDAgMC03LjA3LTcuMDdsLTEuNzIgMS43MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCAxMWE1IDUgMCAwIDAtNy41NC0uNTRsLTMgM2E1IDUgMCAwIDAgNy4wNyA3LjA3bDEuNzEtMS43MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#2-install-required-packages .flex .scroll-m-28 .flex-row .items-center .gap-2}

::: {.flex .text-fd-muted-foreground .items-center .gap-2 .ps-3 .h-9.5}
::: [&_svg]:size-3.5
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibSA0LDQgYSAxLDEgMCAwIDAgLTAuNzA3MDMxMiwwLjI5Mjk2ODcgMSwxIDAgMCAwIDAsMS40MTQwNjI1IEwgOC41ODU5Mzc1LDExIDMuMjkyOTY4OCwxNi4yOTI5NjkgYSAxLDEgMCAwIDAgMCwxLjQxNDA2MiAxLDEgMCAwIDAgMS40MTQwNjI0LDAgbCA1Ljk5OTk5OTgsLTYgYSAxLjAwMDEsMS4wMDAxIDAgMCAwIDAsLTEuNDE0MDYyIEwgNC43MDcwMzEyLDQuMjkyOTY4NyBBIDEsMSAwIDAgMCA0LDQgWiBtIDgsMTQgYSAxLDEgMCAwIDAgLTEsMSAxLDEgMCAwIDAgMSwxIGggOCBhIDEsMSAwIDAgMCAxLC0xIDEsMSAwIDAgMCAtMSwtMSB6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+)
:::

Terminal

::: empty:hidden
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgeD0iOCIgeT0iOCIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQgMTZjLTEuMSAwLTItLjktMi0yVjRjMC0xLjEuOS0yIDItMmgxMGMxLjEgMCAyIC45IDIgMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide}
:::
:::

::: {.bg-fd-secondary .rounded-lg .border .text-[13px] .py-3.5 .overflow-auto .max-h-[600px] .fd-scroll-container}
``` {.min-w-full .w-max .*:flex .*:flex-col}
yarn add gray-matter next-mdx-remote
```
:::
:::

::: fd-step
### [3. Set Up Project Structure](#3-set-up-project-structure){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAgMTNhNSA1IDAgMCAwIDcuNTQuNTRsMy0zYTUgNSAwIDAgMC03LjA3LTcuMDdsLTEuNzIgMS43MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCAxMWE1IDUgMCAwIDAtNy41NC0uNTRsLTMgM2E1IDUgMCAwIDAgNy4wNyA3LjA3bDEuNzEtMS43MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#3-set-up-project-structure .flex .scroll-m-28 .flex-row .items-center .gap-2}

Organize your content, logic, and routes like this:

::: {.not-prose .rounded-md .border .bg-fd-card .p-2}
::: {state="open"}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibTYgMTQgMS41LTIuOUEyIDIgMCAwIDEgOS4yNCAxMEgyMGEyIDIgMCAwIDEgMS45NCAyLjVsLTEuNTQgNmEyIDIgMCAwIDEtMS45NSAxLjVINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgzLjlhMiAyIDAgMCAxIDEuNjkuOWwuODEgMS4yYTIgMiAwIDAgMCAxLjY3LjlIMThhMiAyIDAgMCAxIDIgMnYyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide}components

::: {#radix-_R_7p6allfiv5ubrkdb_ .overflow-hidden state="open"}
::: {.ms-2 .flex .flex-col .border-l .ps-2}
::: {.flex .flex-row .items-center .gap-2 .rounded-md .px-2 .py-1.5 .text-sm .hover:bg-fd-accent .hover:text-fd-accent-foreground .[&_svg]:size-4}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}layout.jsx
:::
:::
:::
:::

::: {state="open"}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibTYgMTQgMS41LTIuOUEyIDIgMCAwIDEgOS4yNCAxMEgyMGEyIDIgMCAwIDEgMS45NCAyLjVsLTEuNTQgNmEyIDIgMCAwIDEtMS45NSAxLjVINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgzLjlhMiAyIDAgMCAxIDEuNjkuOWwuODEgMS4yYTIgMiAwIDAgMCAxLjY3LjlIMThhMiAyIDAgMCAxIDIgMnYyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide}data

::: {#radix-_R_bp6allfiv5ubrkdb_ .overflow-hidden state="open"}
::: {.ms-2 .flex .flex-col .border-l .ps-2}
::: {state="open"}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibTYgMTQgMS41LTIuOUEyIDIgMCAwIDEgOS4yNCAxMEgyMGEyIDIgMCAwIDEgMS45NCAyLjVsLTEuNTQgNmEyIDIgMCAwIDEtMS45NSAxLjVINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgzLjlhMiAyIDAgMCAxIDEuNjkuOWwuODEgMS4yYTIgMiAwIDAgMCAxLjY3LjlIMThhMiAyIDAgMCAxIDIgMnYyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide}blog

::: {#radix-_R_5bp6allfiv5ubrkdb_ .overflow-hidden state="open"}
::: {.ms-2 .flex .flex-col .border-l .ps-2}
::: {.flex .flex-row .items-center .gap-2 .rounded-md .px-2 .py-1.5 .text-sm .hover:bg-fd-accent .hover:text-fd-accent-foreground .[&_svg]:size-4}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}markdown.mdx
:::

::: {.flex .flex-row .items-center .gap-2 .rounded-md .px-2 .py-1.5 .text-sm .hover:bg-fd-accent .hover:text-fd-accent-foreground .[&_svg]:size-4}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}nextjs.mdx
:::

::: {.flex .flex-row .items-center .gap-2 .rounded-md .px-2 .py-1.5 .text-sm .hover:bg-fd-accent .hover:text-fd-accent-foreground .[&_svg]:size-4}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}react.mdx
:::
:::
:::
:::
:::
:::
:::

::: {state="open"}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibTYgMTQgMS41LTIuOUEyIDIgMCAwIDEgOS4yNCAxMEgyMGEyIDIgMCAwIDEgMS45NCAyLjVsLTEuNTQgNmEyIDIgMCAwIDEtMS45NSAxLjVINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgzLjlhMiAyIDAgMCAxIDEuNjkuOWwuODEgMS4yYTIgMiAwIDAgMCAxLjY3LjlIMThhMiAyIDAgMCAxIDIgMnYyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide}lib

::: {#radix-_R_fp6allfiv5ubrkdb_ .overflow-hidden state="open"}
::: {.ms-2 .flex .flex-col .border-l .ps-2}
::: {.flex .flex-row .items-center .gap-2 .rounded-md .px-2 .py-1.5 .text-sm .hover:bg-fd-accent .hover:text-fd-accent-foreground .[&_svg]:size-4}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}format-date.js
:::

::: {.flex .flex-row .items-center .gap-2 .rounded-md .px-2 .py-1.5 .text-sm .hover:bg-fd-accent .hover:text-fd-accent-foreground .[&_svg]:size-4}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}mdx.js
:::
:::
:::
:::

::: {state="open"}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibTYgMTQgMS41LTIuOUEyIDIgMCAwIDEgOS4yNCAxMEgyMGEyIDIgMCAwIDEgMS45NCAyLjVsLTEuNTQgNmEyIDIgMCAwIDEtMS45NSAxLjVINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgzLjlhMiAyIDAgMCAxIDEuNjkuOWwuODEgMS4yYTIgMiAwIDAgMCAxLjY3LjlIMThhMiAyIDAgMCAxIDIgMnYyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide}pages

::: {#radix-_R_jp6allfiv5ubrkdb_ .overflow-hidden state="open"}
::: {.ms-2 .flex .flex-col .border-l .ps-2}
::: {state="open"}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibTYgMTQgMS41LTIuOUEyIDIgMCAwIDEgOS4yNCAxMEgyMGEyIDIgMCAwIDEgMS45NCAyLjVsLTEuNTQgNmEyIDIgMCAwIDEtMS45NSAxLjVINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgzLjlhMiAyIDAgMCAxIDEuNjkuOWwuODEgMS4yYTIgMiAwIDAgMCAxLjY3LjlIMThhMiAyIDAgMCAxIDIgMnYyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide}blog

::: {#radix-_R_djp6allfiv5ubrkdb_ .overflow-hidden state="open"}
::: {.ms-2 .flex .flex-col .border-l .ps-2}
::: {.flex .flex-row .items-center .gap-2 .rounded-md .px-2 .py-1.5 .text-sm .hover:bg-fd-accent .hover:text-fd-accent-foreground .[&_svg]:size-4}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}\[slug\].jsx
:::
:::
:::
:::

::: {.flex .flex-row .items-center .gap-2 .rounded-md .px-2 .py-1.5 .text-sm .hover:bg-fd-accent .hover:text-fd-accent-foreground .[&_svg]:size-4}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}index.jsx
:::
:::
:::
:::
:::
:::
:::

## [Handle Markdown Content](#handle-markdown-content){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#handle-markdown-content .flex .scroll-m-28 .flex-row .items-center .gap-2}

Create utility functions to parse and load MDX content.

::: {.flex .text-fd-muted-foreground .items-center .gap-2 .ps-3 .h-9.5}
::: [&_svg]:size-3.5
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYwem0yMi4wMzQgMTguMjc2Yy0uMTc1LTEuMDk1LS44ODgtMi4wMTUtMy4wMDMtMi44NzMtLjczNi0uMzQ1LTEuNTU0LS41ODUtMS43OTctMS4xNC0uMDkxLS4zMy0uMTA1LS41MS0uMDQ2LS43MDUuMTUtLjY0Ni45MTUtLjg0IDEuNTE1LS42Ni4zOS4xMi43NS40Mi45NzYuOSAxLjAzNC0uNjc2IDEuMDM0LS42NzYgMS43NTUtMS4xMjUtLjI3LS40Mi0uNDA0LS42MDEtLjU4Ni0uNzgtLjYzLS43MDUtMS40NjktMS4wNjUtMi44MzQtMS4wMzRsLS43MDUuMDg5Yy0uNjc2LjE2NS0xLjMyLjUyNS0xLjcxIDEuMDA1LTEuMTQgMS4yOTEtLjgxMSAzLjU0MS41NjkgNC40NzEgMS4zNjUgMS4wMiAzLjM2MSAxLjI0NCAzLjYxNiAyLjIwNS4yNCAxLjE3LS44NyAxLjU0NS0xLjk2NiAxLjQxLS44MTEtLjE4LTEuMjYtLjU4Ni0xLjc1NS0xLjMzNmwtMS44MyAxLjA1MWMuMjEuNDguNDUuNjg5LjgxIDEuMTA5IDEuNzQgMS43NTYgNi4wOSAxLjY2NiA2Ljg3MS0xLjAwNC4wMjktLjA5LjI0LS43MDUuMDc0LTEuNjVsLjA0Ni4wNjd6bS04Ljk4My03LjI0NWgtMi4yNDhjMCAxLjkzOC0uMDA5IDMuODY0LS4wMDkgNS44MDUgMCAxLjIzMi4wNjMgMi4zNjMtLjEzOCAyLjcxMS0uMzMuNjg5LTEuMTguNjAxLTEuNTY2LjQ4LS4zOTYtLjE5Ni0uNTk3LS40NjYtLjgzLS44NTUtLjA2My0uMTA1LS4xMS0uMTk2LS4xMjctLjE5NmwtMS44MjUgMS4xMjVjLjMwNS42My43NSAxLjE3MiAxLjMyNCAxLjUxNy44NTUuNTEgMi4wMDQuNjc1IDMuMjA3LjQwNS43ODMtLjIyNiAxLjQ1OC0uNjkxIDEuODExLTEuNDExLjUxLS45My40MDItMi4wNy4zOTctMy4zNDYuMDEyLTIuMDU0IDAtNC4xMDkgMC02LjE3OWwuMDA0LS4wNTZ6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==)
:::

lib/mdx.js

::: empty:hidden
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}
:::
:::

::: {.bg-fd-secondary .rounded-lg .border .text-[13px] .py-3.5 .overflow-auto .max-h-[600px] .fd-scroll-container}
``` {.min-w-full .w-max .*:flex .*:flex-col}
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

const root = process.cwd()
const POSTS_PATH = path.join(root, "data", "blog") 
```
:::

### [Slug Utilities](#slug-utilities){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#slug-utilities .flex .scroll-m-28 .flex-row .items-center .gap-2}

::: {.flex .text-fd-muted-foreground .items-center .gap-2 .ps-3 .h-9.5}
::: [&_svg]:size-3.5
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYwem0yMi4wMzQgMTguMjc2Yy0uMTc1LTEuMDk1LS44ODgtMi4wMTUtMy4wMDMtMi44NzMtLjczNi0uMzQ1LTEuNTU0LS41ODUtMS43OTctMS4xNC0uMDkxLS4zMy0uMTA1LS41MS0uMDQ2LS43MDUuMTUtLjY0Ni45MTUtLjg0IDEuNTE1LS42Ni4zOS4xMi43NS40Mi45NzYuOSAxLjAzNC0uNjc2IDEuMDM0LS42NzYgMS43NTUtMS4xMjUtLjI3LS40Mi0uNDA0LS42MDEtLjU4Ni0uNzgtLjYzLS43MDUtMS40NjktMS4wNjUtMi44MzQtMS4wMzRsLS43MDUuMDg5Yy0uNjc2LjE2NS0xLjMyLjUyNS0xLjcxIDEuMDA1LTEuMTQgMS4yOTEtLjgxMSAzLjU0MS41NjkgNC40NzEgMS4zNjUgMS4wMiAzLjM2MSAxLjI0NCAzLjYxNiAyLjIwNS4yNCAxLjE3LS44NyAxLjU0NS0xLjk2NiAxLjQxLS44MTEtLjE4LTEuMjYtLjU4Ni0xLjc1NS0xLjMzNmwtMS44MyAxLjA1MWMuMjEuNDguNDUuNjg5LjgxIDEuMTA5IDEuNzQgMS43NTYgNi4wOSAxLjY2NiA2Ljg3MS0xLjAwNC4wMjktLjA5LjI0LS43MDUuMDc0LTEuNjVsLjA0Ni4wNjd6bS04Ljk4My03LjI0NWgtMi4yNDhjMCAxLjkzOC0uMDA5IDMuODY0LS4wMDkgNS44MDUgMCAxLjIzMi4wNjMgMi4zNjMtLjEzOCAyLjcxMS0uMzMuNjg5LTEuMTguNjAxLTEuNTY2LjQ4LS4zOTYtLjE5Ni0uNTk3LS40NjYtLjgzLS44NTUtLjA2My0uMTA1LS4xMS0uMTk2LS4xMjctLjE5NmwtMS44MjUgMS4xMjVjLjMwNS42My43NSAxLjE3MiAxLjMyNCAxLjUxNy44NTUuNTEgMi4wMDQuNjc1IDMuMjA3LjQwNS43ODMtLjIyNiAxLjQ1OC0uNjkxIDEuODExLTEuNDExLjUxLS45My40MDItMi4wNy4zOTctMy4zNDYuMDEyLTIuMDU0IDAtNC4xMDkgMC02LjE3OWwuMDA0LS4wNTZ6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==)
:::

lib/mdx.js

::: empty:hidden
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}
:::
:::

::: {.bg-fd-secondary .rounded-lg .border .text-[13px] .py-3.5 .overflow-auto .max-h-[600px] .fd-scroll-container}
``` {.min-w-full .w-max .*:flex .*:flex-col}
export const allSlugs = fs.readdirSync(POSTS_PATH) 

export const formatSlug = slug => slug.replace(/\.mdx$/, "")
```
:::

### [Load Post by Slug](#load-post-by-slug){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#load-post-by-slug .flex .scroll-m-28 .flex-row .items-center .gap-2}

::: {.flex .text-fd-muted-foreground .items-center .gap-2 .ps-3 .h-9.5}
::: [&_svg]:size-3.5
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYwem0yMi4wMzQgMTguMjc2Yy0uMTc1LTEuMDk1LS44ODgtMi4wMTUtMy4wMDMtMi44NzMtLjczNi0uMzQ1LTEuNTU0LS41ODUtMS43OTctMS4xNC0uMDkxLS4zMy0uMTA1LS41MS0uMDQ2LS43MDUuMTUtLjY0Ni45MTUtLjg0IDEuNTE1LS42Ni4zOS4xMi43NS40Mi45NzYuOSAxLjAzNC0uNjc2IDEuMDM0LS42NzYgMS43NTUtMS4xMjUtLjI3LS40Mi0uNDA0LS42MDEtLjU4Ni0uNzgtLjYzLS43MDUtMS40NjktMS4wNjUtMi44MzQtMS4wMzRsLS43MDUuMDg5Yy0uNjc2LjE2NS0xLjMyLjUyNS0xLjcxIDEuMDA1LTEuMTQgMS4yOTEtLjgxMSAzLjU0MS41NjkgNC40NzEgMS4zNjUgMS4wMiAzLjM2MSAxLjI0NCAzLjYxNiAyLjIwNS4yNCAxLjE3LS44NyAxLjU0NS0xLjk2NiAxLjQxLS44MTEtLjE4LTEuMjYtLjU4Ni0xLjc1NS0xLjMzNmwtMS44MyAxLjA1MWMuMjEuNDguNDUuNjg5LjgxIDEuMTA5IDEuNzQgMS43NTYgNi4wOSAxLjY2NiA2Ljg3MS0xLjAwNC4wMjktLjA5LjI0LS43MDUuMDc0LTEuNjVsLjA0Ni4wNjd6bS04Ljk4My03LjI0NWgtMi4yNDhjMCAxLjkzOC0uMDA5IDMuODY0LS4wMDkgNS44MDUgMCAxLjIzMi4wNjMgMi4zNjMtLjEzOCAyLjcxMS0uMzMuNjg5LTEuMTguNjAxLTEuNTY2LjQ4LS4zOTYtLjE5Ni0uNTk3LS40NjYtLjgzLS44NTUtLjA2My0uMTA1LS4xMS0uMTk2LS4xMjctLjE5NmwtMS44MjUgMS4xMjVjLjMwNS42My43NSAxLjE3MiAxLjMyNCAxLjUxNy44NTUuNTEgMi4wMDQuNjc1IDMuMjA3LjQwNS43ODMtLjIyNiAxLjQ1OC0uNjkxIDEuODExLTEuNDExLjUxLS45My40MDItMi4wNy4zOTctMy4zNDYuMDEyLTIuMDU0IDAtNC4xMDkgMC02LjE3OWwuMDA0LS4wNTZ6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==)
:::

lib/mdx.js

::: empty:hidden
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}
:::
:::

::: {.bg-fd-secondary .rounded-lg .border .text-[13px] .py-3.5 .overflow-auto .max-h-[600px] .fd-scroll-container}
``` {.min-w-full .w-max .*:flex .*:flex-col}
export const getPostBySlug = async slug => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath, "utf8") 
  const { content, data } = matter(source)
  const mdxSource = await serialize(content) 

  return {
    source: mdxSource,
    frontMatter: {
      ...data,
      slug,
    },
  }
}
```
:::

### [Get All Posts](#get-all-posts){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#get-all-posts .flex .scroll-m-28 .flex-row .items-center .gap-2}

::: {.flex .text-fd-muted-foreground .items-center .gap-2 .ps-3 .h-9.5}
::: [&_svg]:size-3.5
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYwem0yMi4wMzQgMTguMjc2Yy0uMTc1LTEuMDk1LS44ODgtMi4wMTUtMy4wMDMtMi44NzMtLjczNi0uMzQ1LTEuNTU0LS41ODUtMS43OTctMS4xNC0uMDkxLS4zMy0uMTA1LS41MS0uMDQ2LS43MDUuMTUtLjY0Ni45MTUtLjg0IDEuNTE1LS42Ni4zOS4xMi43NS40Mi45NzYuOSAxLjAzNC0uNjc2IDEuMDM0LS42NzYgMS43NTUtMS4xMjUtLjI3LS40Mi0uNDA0LS42MDEtLjU4Ni0uNzgtLjYzLS43MDUtMS40NjktMS4wNjUtMi44MzQtMS4wMzRsLS43MDUuMDg5Yy0uNjc2LjE2NS0xLjMyLjUyNS0xLjcxIDEuMDA1LTEuMTQgMS4yOTEtLjgxMSAzLjU0MS41NjkgNC40NzEgMS4zNjUgMS4wMiAzLjM2MSAxLjI0NCAzLjYxNiAyLjIwNS4yNCAxLjE3LS44NyAxLjU0NS0xLjk2NiAxLjQxLS44MTEtLjE4LTEuMjYtLjU4Ni0xLjc1NS0xLjMzNmwtMS44MyAxLjA1MWMuMjEuNDguNDUuNjg5LjgxIDEuMTA5IDEuNzQgMS43NTYgNi4wOSAxLjY2NiA2Ljg3MS0xLjAwNC4wMjktLjA5LjI0LS43MDUuMDc0LTEuNjVsLjA0Ni4wNjd6bS04Ljk4My03LjI0NWgtMi4yNDhjMCAxLjkzOC0uMDA5IDMuODY0LS4wMDkgNS44MDUgMCAxLjIzMi4wNjMgMi4zNjMtLjEzOCAyLjcxMS0uMzMuNjg5LTEuMTguNjAxLTEuNTY2LjQ4LS4zOTYtLjE5Ni0uNTk3LS40NjYtLjgzLS44NTUtLjA2My0uMTA1LS4xMS0uMTk2LS4xMjctLjE5NmwtMS44MjUgMS4xMjVjLjMwNS42My43NSAxLjE3MiAxLjMyNCAxLjUxNy44NTUuNTEgMi4wMDQuNjc1IDMuMjA3LjQwNS43ODMtLjIyNiAxLjQ1OC0uNjkxIDEuODExLTEuNDExLjUxLS45My40MDItMi4wNy4zOTctMy4zNDYuMDEyLTIuMDU0IDAtNC4xMDkgMC02LjE3OWwuMDA0LS4wNTZ6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==)
:::

lib/mdx.js

::: empty:hidden
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}
:::
:::

::: {.bg-fd-secondary .rounded-lg .border .text-[13px] .py-3.5 .overflow-auto .max-h-[600px] .fd-scroll-container}
``` {.min-w-full .w-max .*:flex .*:flex-col}
export const getAllPosts = () => {
  return allSlugs
    .map(slug => {
      const filePath = path.join(POSTS_PATH, slug)
      const { data } = matter(fs.readFileSync(filePath, "utf8"))
      return {
        ...data,
        slug: formatSlug(slug),
        date: new Date(data.date).toISOString(), 
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}
```
:::

## [Format Dates](#format-dates){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#format-dates .flex .scroll-m-28 .flex-row .items-center .gap-2}

::: {.flex .text-fd-muted-foreground .items-center .gap-2 .ps-3 .h-9.5}
::: [&_svg]:size-3.5
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYwem0yMi4wMzQgMTguMjc2Yy0uMTc1LTEuMDk1LS44ODgtMi4wMTUtMy4wMDMtMi44NzMtLjczNi0uMzQ1LTEuNTU0LS41ODUtMS43OTctMS4xNC0uMDkxLS4zMy0uMTA1LS41MS0uMDQ2LS43MDUuMTUtLjY0Ni45MTUtLjg0IDEuNTE1LS42Ni4zOS4xMi43NS40Mi45NzYuOSAxLjAzNC0uNjc2IDEuMDM0LS42NzYgMS43NTUtMS4xMjUtLjI3LS40Mi0uNDA0LS42MDEtLjU4Ni0uNzgtLjYzLS43MDUtMS40NjktMS4wNjUtMi44MzQtMS4wMzRsLS43MDUuMDg5Yy0uNjc2LjE2NS0xLjMyLjUyNS0xLjcxIDEuMDA1LTEuMTQgMS4yOTEtLjgxMSAzLjU0MS41NjkgNC40NzEgMS4zNjUgMS4wMiAzLjM2MSAxLjI0NCAzLjYxNiAyLjIwNS4yNCAxLjE3LS44NyAxLjU0NS0xLjk2NiAxLjQxLS44MTEtLjE4LTEuMjYtLjU4Ni0xLjc1NS0xLjMzNmwtMS44MyAxLjA1MWMuMjEuNDguNDUuNjg5LjgxIDEuMTA5IDEuNzQgMS43NTYgNi4wOSAxLjY2NiA2Ljg3MS0xLjAwNC4wMjktLjA5LjI0LS43MDUuMDc0LTEuNjVsLjA0Ni4wNjd6bS04Ljk4My03LjI0NWgtMi4yNDhjMCAxLjkzOC0uMDA5IDMuODY0LS4wMDkgNS44MDUgMCAxLjIzMi4wNjMgMi4zNjMtLjEzOCAyLjcxMS0uMzMuNjg5LTEuMTguNjAxLTEuNTY2LjQ4LS4zOTYtLjE5Ni0uNTk3LS40NjYtLjgzLS44NTUtLjA2My0uMTA1LS4xMS0uMTk2LS4xMjctLjE5NmwtMS44MjUgMS4xMjVjLjMwNS42My43NSAxLjE3MiAxLjMyNCAxLjUxNy44NTUuNTEgMi4wMDQuNjc1IDMuMjA3LjQwNS43ODMtLjIyNiAxLjQ1OC0uNjkxIDEuODExLTEuNDExLjUxLS45My40MDItMi4wNy4zOTctMy4zNDYuMDEyLTIuMDU0IDAtNC4xMDkgMC02LjE3OWwuMDA0LS4wNTZ6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==)
:::

lib/format-date.js

::: empty:hidden
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}
:::
:::

::: {.bg-fd-secondary .rounded-lg .border .text-[13px] .py-3.5 .overflow-auto .max-h-[600px] .fd-scroll-container}
``` {.min-w-full .w-max .*:flex .*:flex-col}
export const formatDate = date =>
  new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
```
:::

## [Home Page](#home-page){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#home-page .flex .scroll-m-28 .flex-row .items-center .gap-2}

Render a list of all posts.

::: {.flex .text-fd-muted-foreground .items-center .gap-2 .ps-3 .h-9.5}
::: [&_svg]:size-3.5
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC4yMyAxMi4wMDRhMi4yMzYgMi4yMzYgMCAwIDEtMi4yMzUgMi4yMzYgMi4yMzYgMi4yMzYgMCAwIDEtMi4yMzYtMi4yMzYgMi4yMzYgMi4yMzYgMCAwIDEgMi4yMzUtMi4yMzYgMi4yMzYgMi4yMzYgMCAwIDEgMi4yMzYgMi4yMzZ6bTIuNjQ4LTEwLjY5Yy0xLjM0NiAwLTMuMTA3Ljk2LTQuODg4IDIuNjIyLTEuNzgtMS42NTMtMy41NDItMi42MDItNC44ODctMi42MDItLjQxIDAtLjc4My4wOTMtMS4xMDYuMjc4LTEuMzc1Ljc5My0xLjY4MyAzLjI2NC0uOTczIDYuMzY1QzEuOTggOC45MTcgMCAxMC40MiAwIDEyLjAwNGMwIDEuNTkgMS45OSAzLjA5NyA1LjA0MyA0LjAzLS43MDQgMy4xMTMtLjM5IDUuNTg4Ljk4OCA2LjM4LjMyLjE4Ny42OS4yNzUgMS4xMDIuMjc1IDEuMzQ1IDAgMy4xMDctLjk2IDQuODg4LTIuNjI0IDEuNzggMS42NTQgMy41NDIgMi42MDMgNC44ODcgMi42MDMuNDEgMCAuNzgzLS4wOSAxLjEwNi0uMjc1IDEuMzc0LS43OTIgMS42ODMtMy4yNjMuOTczLTYuMzY1QzIyLjAyIDE1LjA5NiAyNCAxMy41OSAyNCAxMi4wMDRjMC0xLjU5LTEuOTktMy4wOTctNS4wNDMtNC4wMzIuNzA0LTMuMTEuMzktNS41ODctLjk4OC02LjM4LS4zMTgtLjE4NC0uNjg4LS4yNzctMS4wOTItLjI3OHptLS4wMDUgMS4wOXYuMDA2Yy4yMjUgMCAuNDA2LjA0NC41NTguMTI3LjY2Ni4zODIuOTU1IDEuODM1LjczIDMuNzA0LS4wNTQuNDYtLjE0Mi45NDUtLjI1IDEuNDQtLjk2LS4yMzYtMi4wMDYtLjQxNy0zLjEwNy0uNTM0LS42Ni0uOTA1LTEuMzQ1LTEuNzI3LTIuMDM1LTIuNDQ3IDEuNTkyLTEuNDggMy4wODctMi4yOTIgNC4xMDUtMi4yOTV6bS05Ljc3LjAyYzEuMDEyIDAgMi41MTQuODA4IDQuMTEgMi4yOC0uNjg2LjcyLTEuMzcgMS41MzctMi4wMiAyLjQ0Mi0xLjEwNy4xMTctMi4xNTQuMjk4LTMuMTEzLjUzOC0uMTEyLS40OS0uMTk1LS45NjQtLjI1NC0xLjQyLS4yMy0xLjg2OC4wNTQtMy4zMi43MTQtMy43MDcuMTktLjA5LjQtLjEyNy41NjMtLjEzMnptNC44ODIgMy4wNWMuNDU1LjQ2OC45MS45OTIgMS4zNiAxLjU2NC0uNDQtLjAyLS44OS0uMDM0LTEuMzQ1LS4wMzQtLjQ2IDAtLjkxNS4wMS0xLjM2LjAzNC40NC0uNTcyLjg5NS0xLjA5NiAxLjM0NS0xLjU2NXpNMTIgOC4xYy43NCAwIDEuNDc3LjAzNCAyLjIwMi4wOTMuNDA2LjU4Mi44MDIgMS4yMDMgMS4xODMgMS44Ni4zNzIuNjQuNzEgMS4yOSAxLjAxOCAxLjk0Ni0uMzA4LjY1NS0uNjQ2IDEuMzEtMS4wMTMgMS45NS0uMzguNjYtLjc3MyAxLjI4OC0xLjE4IDEuODctLjcyOC4wNjMtMS40NjYuMDk4LTIuMjEuMDk4LS43NCAwLTEuNDc3LS4wMzUtMi4yMDItLjA5My0uNDA2LS41ODItLjgwMi0xLjIwNC0xLjE4My0xLjg2LS4zNzItLjY0LS43MS0xLjI5LTEuMDE4LTEuOTQ2LjMwMy0uNjU3LjY0Ni0xLjMxMyAxLjAxMy0xLjk1NC4zOC0uNjYuNzczLTEuMjg2IDEuMTgtMS44NjguNzI4LS4wNjQgMS40NjYtLjA5OCAyLjIxLS4wOTh6bS0zLjYzNS4yNTRjLS4yNC4zNzctLjQ4Ljc2My0uNzA0IDEuMTYtLjIyNS4zOS0uNDM1Ljc4Mi0uNjM1IDEuMTc0LS4yNjUtLjY1Ni0uNDktMS4zMS0uNjc2LTEuOTQ3LjY0LS4xNSAxLjMxNS0uMjgzIDIuMDE1LS4zODZ6bTcuMjYgMGMuNjk1LjEwMyAxLjM2NS4yMyAyLjAwNi4zODctLjE4LjYzMi0uNDA1IDEuMjgyLS42NiAxLjkzMy0uMi0uMzktLjQxLS43ODMtLjY0LTEuMTc0LS4yMjUtLjM5Mi0uNDY1LS43NzQtLjcwNS0xLjE0NnptMy4wNjMuNjc1Yy40ODQuMTUuOTQ0LjMxNyAxLjM3NS40OTggMS43MzIuNzQgMi44NTIgMS43MDggMi44NTIgMi40NzYtLjAwNS43NjgtMS4xMjUgMS43NC0yLjg1NyAyLjQ3NS0uNDIuMTgtLjg4LjM0Mi0xLjM1NS40OTMtLjI4LS45NTgtLjY0Ni0xLjk1Ni0xLjEtMi45OC40NS0xLjAxNy44MS0yLjAxIDEuMDg1LTIuOTY0em0tMTMuMzk1LjAwNGMuMjc4Ljk2LjY0NSAxLjk1NyAxLjEgMi45OC0uNDUgMS4wMTctLjgxMiAyLjAxLTEuMDg2IDIuOTY0LS40ODQtLjE1LS45NDQtLjMxOC0xLjM3LS41LTEuNzMyLS43MzctMi44NTItMS43MDYtMi44NTItMi40NzQgMC0uNzY4IDEuMTItMS43NDIgMi44NTItMi40NzYuNDItLjE4Ljg4LS4zNDIgMS4zNTYtLjQ5NHptMTEuNjc4IDQuMjhjLjI2NS42NTcuNDkgMS4zMTIuNjc2IDEuOTQ4LS42NC4xNTctMS4zMTYuMjktMi4wMTYuMzkuMjQtLjM3NS40OC0uNzYyLjcwNS0xLjE1OC4yMjUtLjM5LjQzNS0uNzg4LjYzNi0xLjE4em0tOS45NDUuMDJjLjIuMzkyLjQxLjc4My42NCAxLjE3NS4yMy4zOS40NjUuNzcyLjcwNSAxLjE0My0uNjk1LS4xMDItMS4zNjUtLjIzLTIuMDA2LS4zODYuMTgtLjYzLjQwNi0xLjI4Mi42Ni0xLjkzM3pNMTcuOTIgMTYuMzJjLjExMi40OTMuMi45NjguMjU0IDEuNDIzLjIzIDEuODY4LS4wNTQgMy4zMi0uNzE0IDMuNzA4LS4xNDcuMDktLjMzOC4xMjgtLjU2My4xMjgtMS4wMTIgMC0yLjUxNC0uODA3LTQuMTEtMi4yOC42ODYtLjcyIDEuMzctMS41MzYgMi4wMi0yLjQ0IDEuMTA3LS4xMTggMi4xNTQtLjMgMy4xMTMtLjU0em0tMTEuODMuMDFjLjk2LjIzNCAyLjAwNi40MTUgMy4xMDcuNTMyLjY2LjkwNSAxLjM0NSAxLjcyNyAyLjAzNSAyLjQ0Ni0xLjU5NSAxLjQ4My0zLjA5MiAyLjI5NS00LjExIDIuMjk1LS4yMi0uMDA1LS40MDYtLjA1LS41NTMtLjEzMi0uNjY2LS4zOC0uOTU1LTEuODM0LS43My0zLjcwMy4wNTQtLjQ2LjE0Mi0uOTQ0LjI1LTEuNDM4em00LjU2LjY0Yy40NC4wMi44OS4wMzQgMS4zNDUuMDM0LjQ2IDAgLjkxNS0uMDEgMS4zNi0uMDM0LS40NC41NzItLjg5NSAxLjA5NS0xLjM0NSAxLjU2NS0uNDU1LS40Ny0uOTEtLjk5My0xLjM2LTEuNTY1eiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=)
:::

pages/index.jsx

::: empty:hidden
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}
:::
:::

::: {.bg-fd-secondary .rounded-lg .border .text-[13px] .py-3.5 .overflow-auto .max-h-[600px] .fd-scroll-container}
``` {.min-w-full .w-max .*:flex .*:flex-col}
import Link from "next/link"
import { getAllPosts } from "../lib/mdx"
import { formatDate } from "../lib/format-date"

export default function Home({ posts }) {
  return (
    <>
      <h1 className="mb-8 text-6xl font-bold">Blog</h1>
      <hr className="my-8" />
      <ul className="flex flex-col gap-3">
        {posts.map(({ slug, title, summary, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <a className="block rounded-lg border p-6 shadow-md">
                <div className="flex justify-between">
                  <h2>{title}</h2>
                  <time dateTime={date}>{formatDate(date)}</time>
                </div>
                <p className="mt-4">{summary}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts()
  return {
    props: { posts },
  }
}
```
:::

## [Article Page](#article-page){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#article-page .flex .scroll-m-28 .flex-row .items-center .gap-2}

Render individual MDX articles by slug.

::: {.flex .text-fd-muted-foreground .items-center .gap-2 .ps-3 .h-9.5}
::: [&_svg]:size-3.5
![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC4yMyAxMi4wMDRhMi4yMzYgMi4yMzYgMCAwIDEtMi4yMzUgMi4yMzYgMi4yMzYgMi4yMzYgMCAwIDEtMi4yMzYtMi4yMzYgMi4yMzYgMi4yMzYgMCAwIDEgMi4yMzUtMi4yMzYgMi4yMzYgMi4yMzYgMCAwIDEgMi4yMzYgMi4yMzZ6bTIuNjQ4LTEwLjY5Yy0xLjM0NiAwLTMuMTA3Ljk2LTQuODg4IDIuNjIyLTEuNzgtMS42NTMtMy41NDItMi42MDItNC44ODctMi42MDItLjQxIDAtLjc4My4wOTMtMS4xMDYuMjc4LTEuMzc1Ljc5My0xLjY4MyAzLjI2NC0uOTczIDYuMzY1QzEuOTggOC45MTcgMCAxMC40MiAwIDEyLjAwNGMwIDEuNTkgMS45OSAzLjA5NyA1LjA0MyA0LjAzLS43MDQgMy4xMTMtLjM5IDUuNTg4Ljk4OCA2LjM4LjMyLjE4Ny42OS4yNzUgMS4xMDIuMjc1IDEuMzQ1IDAgMy4xMDctLjk2IDQuODg4LTIuNjI0IDEuNzggMS42NTQgMy41NDIgMi42MDMgNC44ODcgMi42MDMuNDEgMCAuNzgzLS4wOSAxLjEwNi0uMjc1IDEuMzc0LS43OTIgMS42ODMtMy4yNjMuOTczLTYuMzY1QzIyLjAyIDE1LjA5NiAyNCAxMy41OSAyNCAxMi4wMDRjMC0xLjU5LTEuOTktMy4wOTctNS4wNDMtNC4wMzIuNzA0LTMuMTEuMzktNS41ODctLjk4OC02LjM4LS4zMTgtLjE4NC0uNjg4LS4yNzctMS4wOTItLjI3OHptLS4wMDUgMS4wOXYuMDA2Yy4yMjUgMCAuNDA2LjA0NC41NTguMTI3LjY2Ni4zODIuOTU1IDEuODM1LjczIDMuNzA0LS4wNTQuNDYtLjE0Mi45NDUtLjI1IDEuNDQtLjk2LS4yMzYtMi4wMDYtLjQxNy0zLjEwNy0uNTM0LS42Ni0uOTA1LTEuMzQ1LTEuNzI3LTIuMDM1LTIuNDQ3IDEuNTkyLTEuNDggMy4wODctMi4yOTIgNC4xMDUtMi4yOTV6bS05Ljc3LjAyYzEuMDEyIDAgMi41MTQuODA4IDQuMTEgMi4yOC0uNjg2LjcyLTEuMzcgMS41MzctMi4wMiAyLjQ0Mi0xLjEwNy4xMTctMi4xNTQuMjk4LTMuMTEzLjUzOC0uMTEyLS40OS0uMTk1LS45NjQtLjI1NC0xLjQyLS4yMy0xLjg2OC4wNTQtMy4zMi43MTQtMy43MDcuMTktLjA5LjQtLjEyNy41NjMtLjEzMnptNC44ODIgMy4wNWMuNDU1LjQ2OC45MS45OTIgMS4zNiAxLjU2NC0uNDQtLjAyLS44OS0uMDM0LTEuMzQ1LS4wMzQtLjQ2IDAtLjkxNS4wMS0xLjM2LjAzNC40NC0uNTcyLjg5NS0xLjA5NiAxLjM0NS0xLjU2NXpNMTIgOC4xYy43NCAwIDEuNDc3LjAzNCAyLjIwMi4wOTMuNDA2LjU4Mi44MDIgMS4yMDMgMS4xODMgMS44Ni4zNzIuNjQuNzEgMS4yOSAxLjAxOCAxLjk0Ni0uMzA4LjY1NS0uNjQ2IDEuMzEtMS4wMTMgMS45NS0uMzguNjYtLjc3MyAxLjI4OC0xLjE4IDEuODctLjcyOC4wNjMtMS40NjYuMDk4LTIuMjEuMDk4LS43NCAwLTEuNDc3LS4wMzUtMi4yMDItLjA5My0uNDA2LS41ODItLjgwMi0xLjIwNC0xLjE4My0xLjg2LS4zNzItLjY0LS43MS0xLjI5LTEuMDE4LTEuOTQ2LjMwMy0uNjU3LjY0Ni0xLjMxMyAxLjAxMy0xLjk1NC4zOC0uNjYuNzczLTEuMjg2IDEuMTgtMS44NjguNzI4LS4wNjQgMS40NjYtLjA5OCAyLjIxLS4wOTh6bS0zLjYzNS4yNTRjLS4yNC4zNzctLjQ4Ljc2My0uNzA0IDEuMTYtLjIyNS4zOS0uNDM1Ljc4Mi0uNjM1IDEuMTc0LS4yNjUtLjY1Ni0uNDktMS4zMS0uNjc2LTEuOTQ3LjY0LS4xNSAxLjMxNS0uMjgzIDIuMDE1LS4zODZ6bTcuMjYgMGMuNjk1LjEwMyAxLjM2NS4yMyAyLjAwNi4zODctLjE4LjYzMi0uNDA1IDEuMjgyLS42NiAxLjkzMy0uMi0uMzktLjQxLS43ODMtLjY0LTEuMTc0LS4yMjUtLjM5Mi0uNDY1LS43NzQtLjcwNS0xLjE0NnptMy4wNjMuNjc1Yy40ODQuMTUuOTQ0LjMxNyAxLjM3NS40OTggMS43MzIuNzQgMi44NTIgMS43MDggMi44NTIgMi40NzYtLjAwNS43NjgtMS4xMjUgMS43NC0yLjg1NyAyLjQ3NS0uNDIuMTgtLjg4LjM0Mi0xLjM1NS40OTMtLjI4LS45NTgtLjY0Ni0xLjk1Ni0xLjEtMi45OC40NS0xLjAxNy44MS0yLjAxIDEuMDg1LTIuOTY0em0tMTMuMzk1LjAwNGMuMjc4Ljk2LjY0NSAxLjk1NyAxLjEgMi45OC0uNDUgMS4wMTctLjgxMiAyLjAxLTEuMDg2IDIuOTY0LS40ODQtLjE1LS45NDQtLjMxOC0xLjM3LS41LTEuNzMyLS43MzctMi44NTItMS43MDYtMi44NTItMi40NzQgMC0uNzY4IDEuMTItMS43NDIgMi44NTItMi40NzYuNDItLjE4Ljg4LS4zNDIgMS4zNTYtLjQ5NHptMTEuNjc4IDQuMjhjLjI2NS42NTcuNDkgMS4zMTIuNjc2IDEuOTQ4LS42NC4xNTctMS4zMTYuMjktMi4wMTYuMzkuMjQtLjM3NS40OC0uNzYyLjcwNS0xLjE1OC4yMjUtLjM5LjQzNS0uNzg4LjYzNi0xLjE4em0tOS45NDUuMDJjLjIuMzkyLjQxLjc4My42NCAxLjE3NS4yMy4zOS40NjUuNzcyLjcwNSAxLjE0My0uNjk1LS4xMDItMS4zNjUtLjIzLTIuMDA2LS4zODYuMTgtLjYzLjQwNi0xLjI4Mi42Ni0xLjkzM3pNMTcuOTIgMTYuMzJjLjExMi40OTMuMi45NjguMjU0IDEuNDIzLjIzIDEuODY4LS4wNTQgMy4zMi0uNzE0IDMuNzA4LS4xNDcuMDktLjMzOC4xMjgtLjU2My4xMjgtMS4wMTIgMC0yLjUxNC0uODA3LTQuMTEtMi4yOC42ODYtLjcyIDEuMzctMS41MzYgMi4wMi0yLjQ0IDEuMTA3LS4xMTggMi4xNTQtLjMgMy4xMTMtLjU0em0tMTEuODMuMDFjLjk2LjIzNCAyLjAwNi40MTUgMy4xMDcuNTMyLjY2LjkwNSAxLjM0NSAxLjcyNyAyLjAzNSAyLjQ0Ni0xLjU5NSAxLjQ4My0zLjA5MiAyLjI5NS00LjExIDIuMjk1LS4yMi0uMDA1LS40MDYtLjA1LS41NTMtLjEzMi0uNjY2LS4zOC0uOTU1LTEuODM0LS43My0zLjcwMy4wNTQtLjQ2LjE0Mi0uOTQ0LjI1LTEuNDM4em00LjU2LjY0Yy40NC4wMi44OS4wMzQgMS4zNDUuMDM0LjQ2IDAgLjkxNS0uMDEgMS4zNi0uMDM0LS40NC41NzItLjg5NSAxLjA5NS0xLjM0NSAxLjU2NS0uNDU1LS40Ny0uOTEtLjk5My0xLjM2LTEuNTY1eiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=)
:::

pages/blog/\[slug\].jsx

::: empty:hidden
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide}
:::
:::

::: {.bg-fd-secondary .rounded-lg .border .text-[13px] .py-3.5 .overflow-auto .max-h-[600px] .fd-scroll-container}
``` {.min-w-full .w-max .*:flex .*:flex-col}
import { MDXRemote } from "next-mdx-remote"
import { getPostBySlug, allSlugs, formatSlug } from "../../lib/mdx"
import { formatDate } from "../../lib/format-date"

export default function Blog({ post }) {
  const { title, date } = post.frontMatter

  return (
    <div>
      <h1 className="mb-2 text-6xl font-bold">{title}</h1>
      <time dateTime={date} className="text-lg font-medium">
        {formatDate(date)}
      </time>
      <hr className="my-8" />
      <article className="prose max-w-none">
        <MDXRemote {...post.source} />  // [!code highlight]
      </article>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug)
  return {
    props: { post },
  }
}

export const getStaticPaths = async () => {
  const paths = allSlugs.map(slug => ({
    params: { slug: formatSlug(slug) }, 
  }))
  return {
    paths,
    fallback: false,
  }
}
```
:::

## [Useful Links](#useful-links){.peer card=""}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS0zLjUgc2hyaW5rLTAgdGV4dC1mZC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgcGVlci1ob3ZlcjpvcGFjaXR5LTEwMCIgYXJpYS1sYWJlbD0iTGluayB0byBzZWN0aW9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide .size-3.5 .shrink-0 .text-fd-muted-foreground .opacity-0 .transition-opacity .peer-hover:opacity-100} {#useful-links .flex .scroll-m-28 .flex-row .items-center .gap-2}

-   [Next.js Dynamic
    Routes](https://nextjs.org/docs/routing/dynamic-routes){rel="noreferrer noopener"
    target="_blank"}
-   [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props){rel="noreferrer noopener"
    target="_blank"}
-   [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths){rel="noreferrer noopener"
    target="_blank"}
-   [MDX Documentation](https://mdxjs.com/){rel="noreferrer noopener"
    target="_blank"}

::: {.flex .gap-2 .my-4 .rounded-xl .border .bg-fd-card .p-3 .ps-1 .text-sm .text-fd-card-foreground .shadow-md style="--callout-color:var(--color-fd-info, var(--color-fd-muted))"}
::: {.w-0.5 .bg-(--callout-color)/50 .rounded-sm role="none"}
:::

![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS01IC1tZS0wLjUgZmlsbC0oLS1jYWxsb3V0LWNvbG9yKSB0ZXh0LWZkLWNhcmQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiAxNnYtNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIgOGguMDEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=){.lucide
.size-5 .-me-0.5 .fill-(--callout-color) .text-fd-card}

::: {.flex .flex-col .gap-2 .min-w-0 .flex-1}
Good to Know

::: {.text-fd-muted-foreground .prose-no-margin .empty:hidden}
You can pass custom React components to `MDXRemote` to enhance your
markdown with interactive elements.
:::
:::
:::
:::

::: {.flex-1 role="none"}
:::

::: {.flex .flex-row .flex-wrap .items-center .justify-between .gap-4 .empty:hidden}
Last updated on
:::

::: {.@container .grid .gap-4 .pb-6 .grid-cols-1}
[](learning-programming.html){.flex .flex-col .gap-2 .rounded-lg .border
.p-4 .text-sm .transition-colors .hover:bg-fd-accent/80
.hover:text-fd-accent-foreground .@max-lg:col-span-full .text-end}

::: {.inline-flex .items-center .gap-1.5 .font-medium .flex-row-reverse}
![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgLW14LTEgc2l6ZS00IHNocmluay0wIHJ0bDpyb3RhdGUtMTgwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Im05IDE4IDYtNi02LTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide
.-mx-1 .size-4 .shrink-0 .rtl:rotate-180}

Learning Programming -- Easy to Start, Hard to Master
:::

Programming is more accessible than ever, yet mastering it takes time,
persistence, and clarity. Let\'s bust some myths, and cover what I wish
I knew when I started. 💼
:::

::: {#nd-toc .sticky .pb-2 .pt-12 .max-xl:hidden style="top:calc(var(--fd-banner-height) + var(--fd-nav-height));height:calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))"}
::: {.flex .h-full .w-(--fd-toc-width) .max-w-full .flex-col .pe-4}
::: h-10
:::

### ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgc2l6ZS00Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1IDE4SDMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3IDZIMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjEgMTJIMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.lucide .size-4}On this page {#on-this-page .inline-flex .items-center .gap-1.5 .text-sm .text-fd-muted-foreground}

::: {.relative .min-h-0 .text-sm .ms-px .overflow-auto .[scrollbar-width:none] .[mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] .py-3}
::: {.flex .flex-col}
[](#preface){.prose .relative .py-1.5 .text-sm .text-fd-muted-foreground
.hover:text-fd-accent-foreground .transition-colors
.[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:14px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 style="inset-inline-start:0"}
:::

Preface [](#getting-started){.prose .relative .py-1.5 .text-sm
.text-fd-muted-foreground .hover:text-fd-accent-foreground
.transition-colors .[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:14px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 .bottom-1.5 style="inset-inline-start:0"}
:::

Getting Started
[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAxNiAxNiIgY2xhc3M9ImFic29sdXRlIC10b3AtMS41IHN0YXJ0LTAgc2l6ZS00IHJ0bDotc2NhbGUteC0xMDAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjEwIiB5Mj0iMTIiIGNsYXNzPSJzdHJva2UtZmQtZm9yZWdyb3VuZC8xMCIgc3Ryb2tlLXdpZHRoPSIxIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=){.absolute
.-top-1.5 .start-0 .size-4
.rtl:-scale-x-100}](#1-create-a-nextjs-app){.prose .relative .py-1.5
.text-sm .text-fd-muted-foreground .hover:text-fd-accent-foreground
.transition-colors .[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:26px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 .top-1.5 style="inset-inline-start:10px"}
:::

1\. Create a Next.js App [](#2-install-required-packages){.prose
.relative .py-1.5 .text-sm .text-fd-muted-foreground
.hover:text-fd-accent-foreground .transition-colors
.[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:26px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 style="inset-inline-start:10px"}
:::

2\. Install Required Packages [](#3-set-up-project-structure){.prose
.relative .py-1.5 .text-sm .text-fd-muted-foreground
.hover:text-fd-accent-foreground .transition-colors
.[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:26px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 .bottom-1.5 style="inset-inline-start:10px"}
:::

3\. Set Up Project Structure
[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAxNiAxNiIgY2xhc3M9ImFic29sdXRlIC10b3AtMS41IHN0YXJ0LTAgc2l6ZS00IHJ0bDotc2NhbGUteC0xMDAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPSIxMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMTIiIGNsYXNzPSJzdHJva2UtZmQtZm9yZWdyb3VuZC8xMCIgc3Ryb2tlLXdpZHRoPSIxIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=){.absolute
.-top-1.5 .start-0 .size-4
.rtl:-scale-x-100}](#handle-markdown-content){.prose .relative .py-1.5
.text-sm .text-fd-muted-foreground .hover:text-fd-accent-foreground
.transition-colors .[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:14px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 .top-1.5 .bottom-1.5 style="inset-inline-start:0"}
:::

Handle Markdown Content
[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAxNiAxNiIgY2xhc3M9ImFic29sdXRlIC10b3AtMS41IHN0YXJ0LTAgc2l6ZS00IHJ0bDotc2NhbGUteC0xMDAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjEwIiB5Mj0iMTIiIGNsYXNzPSJzdHJva2UtZmQtZm9yZWdyb3VuZC8xMCIgc3Ryb2tlLXdpZHRoPSIxIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=){.absolute
.-top-1.5 .start-0 .size-4 .rtl:-scale-x-100}](#slug-utilities){.prose
.relative .py-1.5 .text-sm .text-fd-muted-foreground
.hover:text-fd-accent-foreground .transition-colors
.[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:26px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 .top-1.5 style="inset-inline-start:10px"}
:::

Slug Utilities [](#load-post-by-slug){.prose .relative .py-1.5 .text-sm
.text-fd-muted-foreground .hover:text-fd-accent-foreground
.transition-colors .[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:26px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 style="inset-inline-start:10px"}
:::

Load Post by Slug [](#get-all-posts){.prose .relative .py-1.5 .text-sm
.text-fd-muted-foreground .hover:text-fd-accent-foreground
.transition-colors .[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:26px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 .bottom-1.5 style="inset-inline-start:10px"}
:::

Get All Posts
[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAxNiAxNiIgY2xhc3M9ImFic29sdXRlIC10b3AtMS41IHN0YXJ0LTAgc2l6ZS00IHJ0bDotc2NhbGUteC0xMDAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPSIxMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMTIiIGNsYXNzPSJzdHJva2UtZmQtZm9yZWdyb3VuZC8xMCIgc3Ryb2tlLXdpZHRoPSIxIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=){.absolute
.-top-1.5 .start-0 .size-4 .rtl:-scale-x-100}](#format-dates){.prose
.relative .py-1.5 .text-sm .text-fd-muted-foreground
.hover:text-fd-accent-foreground .transition-colors
.[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:14px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 .top-1.5 style="inset-inline-start:0"}
:::

Format Dates [](#home-page){.prose .relative .py-1.5 .text-sm
.text-fd-muted-foreground .hover:text-fd-accent-foreground
.transition-colors .[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:14px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 style="inset-inline-start:0"}
:::

Home Page [](#article-page){.prose .relative .py-1.5 .text-sm
.text-fd-muted-foreground .hover:text-fd-accent-foreground
.transition-colors .[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:14px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 style="inset-inline-start:0"}
:::

Article Page [](#useful-links){.prose .relative .py-1.5 .text-sm
.text-fd-muted-foreground .hover:text-fd-accent-foreground
.transition-colors .[overflow-wrap:anywhere] .first:pt-0 .last:pb-0
.data-[active=true]:text-fd-primary active="false"
style="padding-inline-start:14px"}

::: {.absolute .inset-y-0 .w-px .bg-fd-foreground/10 style="inset-inline-start:0"}
:::

Useful Links
:::
:::
:::
:::
:::
:::
:::
:::

::: {#S:1 hidden=""}
::: {#contact .section .relative .z-0 .mt-40 .flex .w-full .justify-center .overflow-x-hidden .bg-[url('/cta.avif')] .bg-cover .bg-center .px-4 .py-20}
::: {.relative .z-10 .mx-auto .flex .w-full .max-w-6xl .flex-col .items-center .justify-center .gap-y-2 .py-10 .text-center .lg:mx-0}
::: {.absolute .top-1/2 .left-1/2 .z-50 .translate-x-[130px] .-translate-y-1/2 .cursor-grab .overflow-hidden .rounded-full .md:-translate-y-[230px] .lg:translate-x-[280px] .lg:-translate-y-[70px] draggable="false" tabindex="0" style="-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:none"}
::: {.relative .rounded-full .bg-blue-700 .p-1.5 .leading-none .font-medium}
::: {.relative .size-[95px] .rounded-full .bg-black .p-2}
::: {.absolute .top-1/2 .left-1/2 .size-20 .-translate-x-1/2 .-translate-y-1/2 .rounded-full}
![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idHJhbnNmb3JtLW9yaWdpbi1jZW50ZXItY2VudGVyIiB2aWV3Ym94PSIwIDAgMTAwIDEwMCIgb3ZlcmZsb3c9InZpc2libGUiIGZpbGw9ImJsYWNrIiBzdHlsZT0id2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPSJjdXJ2ZS13bnhrejQiIGQ9Ik0gMCA1MCBMIDAgNTAgQSAxIDEgMCAwIDEgMTAwIDUwIEwgMTAwIDUwIEwgMTAwIDUwIEEgMSAxIDAgMCAxIDAgNTAgTCAwIDUwIiBzdHJva2Utd2lkdGg9Im5vbmUiIGZpbGw9InRyYW5zcGFyZW50Ij48L3BhdGg+PHRleHQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dHBhdGggaHJlZj0iI2N1cnZlLXdueGt6NCIgc3RhcnRvZmZzZXQ9IjAiIGRvbWluYW50LWJhc2VsaW5lPSJIYW5naW5nIiBzdHlsZT0iZm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NjAwO3dvcmQtc3BhY2luZzo1cHg7bGV0dGVyLXNwYWNpbmc6Mi4xcHg7ZmlsbDpyZ2JhKDI0MiwgMjQyLCAyNDIsIDAuOSkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9QRU4gVE8gV09SSyDCtyBPUEVOIFRPIFdPUksgwrc8L3RleHRwYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.transform-origin-center-center}
:::

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdib3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiBzaXplLTEwIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiByb3RhdGUtNDUgZmlsbC13aGl0ZSB0ZXh0LXdoaXRlIG9wYWNpdHktODAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiAxQzEyIDEgMTIgOCAxMCAxMEM4IDEyIDEgMTIgMSAxMkMxIDEyIDggMTIgMTAgMTRDMTIgMTYgMTIgMjMgMTIgMjNDMTIgMjMgMTIgMTYgMTQgMTRDMTYgMTIgMjMgMTIgMjMgMTJDMjMgMTIgMTYgMTIgMTQgMTBDMTIgOCAxMiAxIDEyIDFaIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=){.absolute
.top-1/2 .left-1/2 .size-10 .-translate-x-1/2 .-translate-y-1/2
.rotate-45 .fill-white .text-white .opacity-80}
:::

[OPEN TO WORK · OPEN TO WORK ·]{.sr-only}
:::
:::

::: relative
![wings](../wings.svg){.opacity-0 .select-none .dark:opacity-100
aria-hidden="true"
draggable="false"}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiB6LTUwIHctOCAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgbWQ6dy0xMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgNTM1MCA1MzUwIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9ImZpbGwtYmxhY2sgZGFyazpmaWxsLXdoaXRlIiBkPSJNMjY1IDQwNjljLTcwLTIwLTcxLTU5LTQtMTk3IDI5LTU5IDc4LTE2MSAxMDktMjI3IDMyLTY2IDg1LTE3OCAxMTktMjQ4IDc3LTE1OSAxNjctMzQ3IDIzNi00OTIgMjktNjAgODEtMTY4IDExNS0yNDAgMzQtNzEgNzktMTY2IDEwMC0yMTAgMjEtNDQgNjItMTMyIDkzLTE5NSAzMC02MyAxMDEtMjEyIDE1Ny0zMzAgMjQwLTUwNCAzMTEtNjUyIDM3My03ODAgMzUtNzQgMTAxLTIxMCAxNDUtMzAzIDkwLTE4NiA5Ni0xOTMgMTg2LTE4NCA1OCA1IDc2IDIzIDEyNCAxMjEgMzQxIDY5MyA0NjIgOTQ2IDQ2MiA5NjggMCAxMCAzIDE4IDggMTggNCAwIDE3IDE5IDI5IDQyIDI3IDUyIDIyOSA0NjkgMjg4IDU5MyAyMyA1MCA4OCAxODIgMTQzIDI5NSA1NSAxMTMgMTY1IDM0MCAyNDUgNTA1IDgwIDE2NSAxODggMzg5IDI0MSA0OTkgNTMgMTA5IDEwMyAyMTQgMTEyIDIzNSAxOCA0NCAxMSA5MS0xNyAxMTctMjAgMTgtNDEgMTktMzAzIDE5LTI4MSAwLTI4MSAwLTM0NC0yOS0xMTAtNTEtMTMyLTg0LTM0Ny01MjEtMTA2LTIxNC0zMDMtNjEzLTQzNy04ODYtMTM1LTI3My0yNTEtNDk5LTI1Ny01MDMtMTktMTItMzkgMTEtNzMgODMtMTcgMzYtODUgMTc2LTE1MSAzMTEtNjYgMTM1LTEzNCAyNzctMTUyIDMxNS0xOCAzOS02NSAxMzgtMTA1IDIyMC04MiAxNjktMTY2IDM0NC0yNTAgNTIwLTE1MyAzMjMtMTgxIDM3My0yMzAgNDE5LTczIDY4LTExMiA3Ni0zNjkgNzUtMTE5IDAtMjI5LTUtMjQ2LTEweiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9ImZpbGwtYmxhY2sgZGFyazpmaWxsLXdoaXRlIiBkPSJNMzkyMiAzOTk5Yy00Mi0yMS00Ny0yOS0xMzQtMjA4LTE0My0yOTMtMTQ4LTMxMC0xMDctMzQ3IDE5LTE3IDQzLTIwIDI1My0yNCAyNzQtNyAzMDgtMTYgNDA2LTEwNyAyMDktMTkzIDE2Ni01NTEtODItNjk2LTEwMC01OC0xNjgtNjctNTIwLTY3LTM0NCAwLTM3MC0zLTQwMy01My05LTE0LTU0LTEwNy0xMDEtMjA2LTkyLTIwMC0xMDEtMjM3LTU5LTI2OSAyNC0xOSA0NS0yMCAzNzMtMjQgMzQ3LTQgMzQ3LTQgNDIyLTM5IDEzNy02NSAyMTAtMTc1IDIxMC0zMTcgMC0xNzYtMTAyLTMwOC0yNjctMzQ4LTQ2LTEwLTE4Mi0xMy02NDItMTQtNTg0IDAtNTg0IDAtNjE4LTM4LTMwLTMyLTkzLTE1NS0yMzQtNDYwLTM3LTgwLTM4LTEyNC0zLTE1MSAyNi0yMSAzMy0yMSA3ODgtMjEgNzA4IDAgNzY5IDEgODc2IDIwIDIzOCA0MCA0MDkgMTE5IDU2NSAyNjIgMTIwIDEwOSAyMjEgMjc4IDI2NiA0NDMgNDUgMTY5IDM0IDM4OC0yOCA1NTctMzAgODEtMTA0IDE5Ny0xNTcgMjQ3LTIwIDE5LTM2IDQzLTM2IDUyIDAgMTAgMzIgNDAgNzggNzIgMzA5IDIxNyA0NDUgNTQ0IDM4OCA5MjctNjYgNDM1LTQxMyA3NzAtODUxIDgyMC00OSA1LTE0NiAxMC0yMTUgMTAtMTA4IDAtMTMxLTMtMTY4LTIxeiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L3N2Zz4=){.absolute
.top-1/2 .left-1/2 .z-50 .w-8 .-translate-x-1/2 .-translate-y-1/2
.md:w-10}
:::

[ ]{.mt-4 .text-2xl .font-light .tracking-wide .text-black
.dark:text-white .sm:text-4xl .lg:text-5xl}

### FROM CONCEPT TO [CREATION]{.font-extrabold} {#from-concept-to-creation .text-nowrap style="opacity:0;transform:translateX(-300px)"}

### LET\'s MAKE IT [HAPPEN!]{.font-extrabold} {#lets-make-it-happen .mt-3 .text-nowrap style="opacity:0;transform:translateX(300px)"}

::: {.group style="transform:none"}
[Get In Touch]{.z-10 .px-3 .text-black .transition-colors .duration-300
.group-hover:text-white .dark:text-white
.dark:group-hover:text-black}[]{.absolute .inset-0 .translate-x-[45%]
.scale-0 .rounded-full .bg-black .opacity-0 .transition-all
.duration-300 .ease-in-out .group-hover:translate-x-0
.group-hover:scale-100 .group-hover:opacity-100
.dark:bg-white}[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0IHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTUgZ3JvdXAtaG92ZXI6b3BhY2l0eS0wIGRhcms6dGV4dC1ibGFjayIgYXJpYS1oaWRkZW49InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01IDEyaDE0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibTEyIDUgNyA3LTcgNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide
.lucide-arrow-right .text-white .transition-all .duration-300
.group-hover:translate-x-5 .group-hover:opacity-0
.dark:text-black}![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0IGFic29sdXRlIC10cmFuc2xhdGUteC01IHRleHQtd2hpdGUgb3BhY2l0eS0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGRhcms6dGV4dC1ibGFjayIgYXJpYS1oaWRkZW49InRydWUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01IDEyaDE0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0ibTEyIDUgNyA3LTcgNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.lucide
.lucide-arrow-right .absolute .-translate-x-5 .text-white .opacity-0
.transition-all .duration-300 .group-hover:translate-x-0
.group-hover:opacity-100 .dark:text-black}]{.z-10 .flex .items-center
.justify-center .overflow-hidden .rounded-full .bg-black .p-2
.transition-colors .duration-300 .group-hover:bg-transparent .md:p-2.5
.dark:bg-white}
:::

I\'m available for full-time roles & freelance projects.

I thrive on crafting dynamic web applications, and\
delivering seamless user experiences.
:::

::: {.absolute .inset-0 .z-0 .bg-linear-to-b .from-transparent .to-white-1 .dark:to-black .opacity-100 aria-hidden="true"}
:::

::: {.absolute .inset-0 .z-0 .bg-linear-to-b .from-white-1 .dark:from-black .to-transparent .opacity-100 aria-hidden="true"}
:::

::: {.absolute .inset-0 .z-0 .bg-white-1 .dark:bg-black .opacity-65 aria-hidden="true"}
:::
:::
:::

::: {#S:2 hidden=""}
::: {.bg-white-2 .relative .mx-auto .flex .flex-col .items-center .gap-6 .rounded-3xl .px-4 .py-10 .shadow-sm .backdrop-blur-lg .md:flex-row .dark:bg-white/[0.02]}
::: {.flex .flex-1 .flex-col .items-start .gap-4 .md:flex-row .md:gap-10 .md:px-8}
::: {.hidden .flex-col .gap-y-6 .md:flex .md:w-1/2}
[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2l6ZS0xMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Ym94PSIwIDAgNTM1MCA1MzUwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0iZmlsbC1ibGFjayBkYXJrOmZpbGwtd2hpdGUiIGQ9Ik0yNjUgNDA2OWMtNzAtMjAtNzEtNTktNC0xOTcgMjktNTkgNzgtMTYxIDEwOS0yMjcgMzItNjYgODUtMTc4IDExOS0yNDggNzctMTU5IDE2Ny0zNDcgMjM2LTQ5MiAyOS02MCA4MS0xNjggMTE1LTI0MCAzNC03MSA3OS0xNjYgMTAwLTIxMCAyMS00NCA2Mi0xMzIgOTMtMTk1IDMwLTYzIDEwMS0yMTIgMTU3LTMzMCAyNDAtNTA0IDMxMS02NTIgMzczLTc4MCAzNS03NCAxMDEtMjEwIDE0NS0zMDMgOTAtMTg2IDk2LTE5MyAxODYtMTg0IDU4IDUgNzYgMjMgMTI0IDEyMSAzNDEgNjkzIDQ2MiA5NDYgNDYyIDk2OCAwIDEwIDMgMTggOCAxOCA0IDAgMTcgMTkgMjkgNDIgMjcgNTIgMjI5IDQ2OSAyODggNTkzIDIzIDUwIDg4IDE4MiAxNDMgMjk1IDU1IDExMyAxNjUgMzQwIDI0NSA1MDUgODAgMTY1IDE4OCAzODkgMjQxIDQ5OSA1MyAxMDkgMTAzIDIxNCAxMTIgMjM1IDE4IDQ0IDExIDkxLTE3IDExNy0yMCAxOC00MSAxOS0zMDMgMTktMjgxIDAtMjgxIDAtMzQ0LTI5LTExMC01MS0xMzItODQtMzQ3LTUyMS0xMDYtMjE0LTMwMy02MTMtNDM3LTg4Ni0xMzUtMjczLTI1MS00OTktMjU3LTUwMy0xOS0xMi0zOSAxMS03MyA4My0xNyAzNi04NSAxNzYtMTUxIDMxMS02NiAxMzUtMTM0IDI3Ny0xNTIgMzE1LTE4IDM5LTY1IDEzOC0xMDUgMjIwLTgyIDE2OS0xNjYgMzQ0LTI1MCA1MjAtMTUzIDMyMy0xODEgMzczLTIzMCA0MTktNzMgNjgtMTEyIDc2LTM2OSA3NS0xMTkgMC0yMjktNS0yNDYtMTB6Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9ImZpbGwtYmxhY2sgZGFyazpmaWxsLXdoaXRlIiBkPSJNMzkyMiAzOTk5Yy00Mi0yMS00Ny0yOS0xMzQtMjA4LTE0My0yOTMtMTQ4LTMxMC0xMDctMzQ3IDE5LTE3IDQzLTIwIDI1My0yNCAyNzQtNyAzMDgtMTYgNDA2LTEwNyAyMDktMTkzIDE2Ni01NTEtODItNjk2LTEwMC01OC0xNjgtNjctNTIwLTY3LTM0NCAwLTM3MC0zLTQwMy01My05LTE0LTU0LTEwNy0xMDEtMjA2LTkyLTIwMC0xMDEtMjM3LTU5LTI2OSAyNC0xOSA0NS0yMCAzNzMtMjQgMzQ3LTQgMzQ3LTQgNDIyLTM5IDEzNy02NSAyMTAtMTc1IDIxMC0zMTcgMC0xNzYtMTAyLTMwOC0yNjctMzQ4LTQ2LTEwLTE4Mi0xMy02NDItMTQtNTg0IDAtNTg0IDAtNjE4LTM4LTMwLTMyLTkzLTE1NS0yMzQtNDYwLTM3LTgwLTM4LTEyNC0zLTE1MSAyNi0yMSAzMy0yMSA3ODgtMjEgNzA4IDAgNzY5IDEgODc2IDIwIDIzOCA0MCA0MDkgMTE5IDU2NSAyNjIgMTIwIDEwOSAyMjEgMjc4IDI2NiA0NDMgNDUgMTY5IDM0IDM4OC0yOCA1NTctMzAgODEtMTA0IDE5Ny0xNTcgMjQ3LTIwIDE5LTM2IDQzLTM2IDUyIDAgMTAgMzIgNDAgNzggNzIgMzA5IDIxNyA0NDUgNTQ0IDM4OCA5MjctNjYgNDM1LTQxMyA3NzAtODUxIDgyMC00OSA1LTE0NiAxMC0yMTUgMTAtMTA4IDAtMTMxLTMtMTY4LTIxeiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.size-10}](../index.html){.inline-block}

I\'m Ravindra - a full-stack developer, freelancer & problem solver.
Thanks for checking out my site!
:::

::: {.flex .flex-col .items-start .justify-between .gap-6 .md:mx-4 .md:w-1/2 .md:flex-row .md:gap-16}
::: {.flex .flex-col .gap-2 .md:gap-4}
#### General {#general .text-base .text-neutral-700 .dark:text-white}

-   [Home](../index.html){.after:bg-primary .relative .after:absolute
    .after:bottom-0 .after:left-0 .after:h-px .after:w-full
    .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
-   [About](../about.html){.after:bg-primary .relative .after:absolute
    .after:bottom-0 .after:left-0 .after:h-px .after:w-full
    .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
-   [Projects](../projects.html){.after:bg-primary .relative
    .after:absolute .after:bottom-0 .after:left-0 .after:h-px
    .after:w-full .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
-   [Blog](../blog.html){.after:bg-primary .relative .after:absolute
    .after:bottom-0 .after:left-0 .after:h-px .after:w-full
    .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
:::

::: {.flex .flex-col .gap-2 .md:gap-4}
#### Specifics {#specifics .text-base .text-neutral-700 .dark:text-white}

-   [Guest Book](../guestbook.html){.after:bg-primary .relative
    .after:absolute .after:bottom-0 .after:left-0 .after:h-px
    .after:w-full .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
-   [Bucket List](../bucket-list.html){.after:bg-primary .relative
    .after:absolute .after:bottom-0 .after:left-0 .after:h-px
    .after:w-full .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
-   [Uses](../uses.html){.after:bg-primary .relative .after:absolute
    .after:bottom-0 .after:left-0 .after:h-px .after:w-full
    .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
-   [Attribution](https://aayushbharti.in/attribution){.after:bg-primary
    .relative .after:absolute .after:bottom-0 .after:left-0 .after:h-px
    .after:w-full .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
:::

::: {.flex .flex-col .gap-2 .md:gap-4}
#### More {#more .text-base .text-neutral-700 .dark:text-white}

-   [Book a call](../contact.html){.after:bg-primary .relative
    .after:absolute .after:bottom-0 .after:left-0 .after:h-px
    .after:w-full .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
-   [Links](../links.html){.after:bg-primary .relative .after:absolute
    .after:bottom-0 .after:left-0 .after:h-px .after:w-full
    .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
-   [RSS](../rss.rss){.after:bg-primary .relative .after:absolute
    .after:bottom-0 .after:left-0 .after:h-px .after:w-full
    .after:origin-bottom-right .after:scale-x-0
    .after:transition-transform .after:duration-300 .after:ease-in-out
    .hover:after:origin-bottom-left .hover:after:scale-x-100}
:::
:::
:::
:::

::: {.mt-4 .flex .flex-col .items-center .justify-between .gap-4 .text-sm .text-neutral-600 .md:flex-row .md:px-8 .dark:text-neutral-400}
::: {.flex .flex-col .items-center .gap-3 .sm:flex-row .sm:gap-6}
© 2025 [Ravindra Verma](../index.html){.whitespace-nowrap
.transition-colors .hover:text-black .dark:hover:text-white}. All rights
reserved

::: {.flex .items-center .justify-center .gap-4 .sm:gap-6}
[Privacy Policy](../legal/privacy.html){.whitespace-nowrap
.transition-colors .hover:text-black .dark:hover:text-white}[Terms &
Conditions](../legal/terms.html){.whitespace-nowrap .transition-colors
.hover:text-black .dark:hover:text-white}
:::
:::

::: {.flex .flex-col .items-center .gap-4 .md:flex-row .md:justify-end}
::: {.h-10 .w-[124px] .rounded-full .bg-neutral-200 .dark:bg-neutral-800}
:::

::: {.flex .gap-3}
[[LinkedIn]{.sr-only}![](data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBoZWlnaHQ9IjIwIiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InN0cm9rZS0xIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2IDhhNiA2IDAgMCAxIDYgNnY3aC00di03YTIgMiAwIDAgMC0yLTIgMiAyIDAgMCAwLTIgMnY3aC00di03YTYgNiAwIDAgMSA2LTZ6Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iOSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+){.stroke-1}](https://linkedin.com/in/iaayushbharti){.text-neutral-900
.dark:text-neutral-300 .transition-colors .hover:text-neutral-700
.dark:hover:text-neutral-100 target="_blank" rel="noopener noreferrer"}

[[GitHub]{.sr-only}![](data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBoZWlnaHQ9IjIwIiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InN0cm9rZS0xIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1IDIydi00YTQuOCA0LjggMCAwIDAtMS0zLjVjMyAwIDYtMiA2LTUuNS4wOC0xLjI1LS4yNy0yLjQ4LTEtMy41LjI4LTEuMTUuMjgtMi4zNSAwLTMuNSAwIDAtMSAwLTMgMS41LTIuNjQtLjUtNS4zNi0uNS04IDBDNiAyIDUgMiA1IDJjLS4zIDEuMTUtLjMgMi4zNSAwIDMuNUE1LjQwMyA1LjQwMyAwIDAgMCA0IDljMCAzLjUgMyA1LjUgNiA1LjUtLjM5LjQ5LS42OCAxLjA1LS44NSAxLjY1LS4xNy42LS4yMiAxLjIzLS4xNSAxLjg1djQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05IDE4Yy00LjUxIDItNS0yLTctMiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.stroke-1}](https://github.com/aayushbharti){.text-neutral-900
.dark:text-neutral-300 .transition-colors .hover:text-neutral-700
.dark:hover:text-neutral-100 target="_blank" rel="noopener noreferrer"}

[[Twitter]{.sr-only}![](data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBoZWlnaHQ9IjIwIiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InN0cm9rZS0xIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIyIDRzLS43IDIuMS0yIDMuNGMxLjYgMTAtOS40IDE3LjMtMTggMTEuNiAyLjIuMSA0LjQtLjYgNi0yQzMgMTUuNS41IDkuNiAzIDVjMi4yIDIuNiA1LjYgNC4xIDkgNC0uOS00LjIgNC02LjYgNy0zLjggMS4xIDAgMy0xLjIgMy0xLjJ6Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg==){.stroke-1}](https://x.com/iaayushbharti){.text-neutral-900
.dark:text-neutral-300 .transition-colors .hover:text-neutral-700
.dark:hover:text-neutral-100 target="_blank" rel="noopener noreferrer"}
:::
:::
:::
:::
