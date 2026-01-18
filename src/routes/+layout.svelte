<script>
    export let data;
</script>

<style>
    /* combined styles (only one top-level <style> allowed) */
    :global(*) {}
    .bg-svg {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0.08;
        z-index: -1;
        filter: blur(6px);
    }
    .header {
        position: relative;
        z-index: 10;
        padding: 1rem;
    }
    .logo {
        width: 48px;
        height: 48px;
        fill: currentColor;
        display: inline-block;
        vertical-align: middle;
    }
</style>

<!-- define the reusable logo once -->
<svg aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
    <symbol id="site-logo" viewBox="0 0 100 100">
        <!-- replace with your actual logo -->
        <circle cx="50" cy="50" r="45" />
        <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="#fff" />
    </symbol>
</svg>

<!-- background uses the same symbol -->
<svg class="bg-svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" role="presentation" aria-hidden="true">
    <use href="#site-logo" />
</svg>

<header class="header">
    <a href="/" class="brand" aria-label="Home">
        <svg class="logo" viewBox="0 0 100 100" aria-hidden="false">
            <use href="#site-logo" />
        </svg>
    </a>
</header>

<slot />