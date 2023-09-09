<template>
  <div class="h-screen w-full flex items-center justify-center">
    <span class="loader" />
  </div>
</template>

<style scoped>
@keyframes load {
    0% {
        opacity: 0.08;
        /* font-size: 10px; */
        /* font-weight: 400; */
        filter: blur(5px);
        letter-spacing: 3px;
    }

    100% {
        /* opacity: 1; */
        /* font-size: 12px; */
        /* font-weight:600; */
        /* filter: blur(0); */
    }
}

.loader {
  display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: auto;
    /* width: 350px; */
    /* font-size:26px; */
    font-family: Helvetica, sans-serif, Arial;
    animation: load 1.2s infinite 0s ease-in-out;
    animation-direction: alternate;
    text-shadow: 0 0 1px white;
        transform: rotateZ(45deg);
        perspective: 1000px;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        color: var(--vegas-gold);
      }
        .loader:before,
        .loader:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: 1s spin linear infinite;
        }
        .loader:after {
          color: var(--vegas-gold);
          transform: rotateY(70deg);
          animation-delay: .4s;
        }

      @keyframes rotate {
        0% {
          transform: translate(-50%, -50%) rotateZ(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotateZ(360deg);
        }
      }

      @keyframes rotateccw {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(-360deg);
        }
      }

      @keyframes spin {
        0%,
        100% {
          box-shadow: .2em 0px 0 0px currentcolor;
        }
        12% {
          box-shadow: .2em .2em 0 0 currentcolor;
        }
        25% {
          box-shadow: 0 .2em 0 0px currentcolor;
        }
        37% {
          box-shadow: -.2em .2em 0 0 currentcolor;
        }
        50% {
          box-shadow: -.2em 0 0 0 currentcolor;
        }
        62% {
          box-shadow: -.2em -.2em 0 0 currentcolor;
        }
        75% {
          box-shadow: 0px -.2em 0 0 currentcolor;
        }
        87% {
          box-shadow: .2em -.2em 0 0 currentcolor;
        }
      }
</style>
