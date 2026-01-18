<script>
  import "../app.css";
  import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>Akhil Pasumarthy</title>
	<meta name="akhilpvenkat" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<svg class="absolute top-0 left-0 w-screen h-screen z-[-1]" width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path class="path" d="M0,160 Q360,100 720,160 T1440,160 V320 H0 Z" stroke="#007bff" stroke-width="2" fill="rgba(0,123,255,0.1)"/>
  <path class="path" d="M0,200 Q360,140 720,200 T1440,200 V320 H0 Z" stroke="#007bff" stroke-width="2" fill="rgba(0,123,255,0.05)"/>
  <path class="path" d="M0,240 Q360,180 720,240 T1440,240 V320 H0 Z" stroke="#007bff" stroke-width="2" fill="rgba(0,123,255,0.03)"/>
</svg>

<div class="center">

  <div class="profile-container flex flex-col justify-center items-center">
    <img src="/logo.svg" alt="Profile" class="logo mb-4">

    <div class="aboutme-container text-center">
      <h1 class="name">
        akhil pasumarthy
      </h1>
      <p class="ml-1 sm:pt-4 pt-0 mb-4">
        Passionate developer and tech enthusiast. I love building creative projects and exploring new technologies.
      </p>
      <div class="icon-container">
        <a href="https://discordapp.com/users/816498837156790283">
          <Icon icon="mdi:discord" class="icon"/>
        </a>
        <a href="mailto:akhil.p.venkat@gmail.com">
          <Icon icon="mdi:email" class="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/akhil-pasumarthy">
          <Icon icon="mdi:linkedin" class="icon"/>
        </a>
        <a href="https://github.com/akhilpvenkat">
          <Icon icon="mdi:github" class="icon"/>
        </a>
      </div>
    </div>
  </div>

</div>

<style>
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 30s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>