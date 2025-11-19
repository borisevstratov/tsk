# Tiny Static Kit (TSK)

Develop static HTML sites using JSX and TypeScript.
Zero runtime. Zero framework. Zero hydration.

## Why TSK?

You want a blazing-fast static site and actually enjoy writing it — reusable components, props, the good stuff?  
That’s what TSK for.

I tried Svelte, Next.js, Remix, Astro, Gatsby… bro what the fuck are these frameworks even doing?

- Install 400 dependencies?  
- Learn a new router, a new data-fetching paradigm, a new folder convention, a new religion?  
- Ship client-side JS just to render text that never changes?  
- Wait 40 seconds for dev server to restart because you finally centered a div?

It’s just a homepage, not Twitter!

TSK lets you write normal TSX components (the React syntax you already know), then compiles them to clean, minified, zero-JavaScript HTML in <100 ms.

Homepage. Portfolio. Landing page. Blog. Whatever.

Write it. Compile it. Throw it on any host. Collect profits.

## Usage

Check the `/example` folder. This is all you basically need.

### One-command starter (recommended)

```bash
npm create @borisevstratov/tsk@latest my-cool-site
```

Then just 

```bash
cd my-cool-site
npm install
npm run dev     # hot-reload while editing (outputs to ./dist by default)
npm run build   # production build (use this one in your CI)
```

The artifacts will be placed in `my-cool-site/dist/*`.  
Just open HTML in Chrome.

## Credits

Shoutouts to

- [Odin](https://github.com/odinhb) -  created [stringjsx](https://github.com/dodoas/stringjsx) from vhtml
- [Jason Miller](https://github.com/developit) - original creator of [vhtml](https://github.com/developit/vhtml)
