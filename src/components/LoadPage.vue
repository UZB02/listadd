<template>
    <div class="load">
        <h3>
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </h3>
    </div>
</template>

<script>
</script>

<style>
.load {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.load h3 {
    color: blue;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-size: 2.2em;
    filter: drop-shadow(2px 2px 2px blue);
}

.load h3 span:nth-child(1) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan1 1s linear alternate infinite;
}

.load h3 span:nth-child(2) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan2 1s linear alternate infinite;
}

.load h3 span:nth-child(3) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan3 1s linear alternate infinite;
}

.load h3 span:nth-child(4) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan4 1s linear alternate infinite;
}

.load h3 span:nth-child(5) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan5 1s linear alternate infinite;
}

.load h3 span:nth-child(6) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan6 1s linear alternate infinite;
}

.load h3 span:nth-child(7) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan7 1s linear alternate infinite;
}

.load h3 span:nth-child(8) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan8 1s linear alternate infinite;
}

.load h3 span:nth-child(9) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan9 1s linear alternate infinite;
}

.load h3 span:nth-child(10) {
    color: blue;
    /* transition: all .5s ease-out; */
    animation: animSpan10 1s linear alternate infinite;
}

@keyframes animSpan1 {
    0% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }

    100% {
        filter: drop-shadow(1px 1px 5px #fff);
    }
}

@keyframes animSpan2 {
    0% {
        filter: drop-shadow(1px 1px 5px #fff);
    }

    100% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }
}

@keyframes animSpan3 {
    0% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }

    100% {
        tfilter: drop-shadow(1px 1px 5px #fff);
    }
}

@keyframes animSpan4 {
    0% {
        filter: drop-shadow(1px 1px 5px #fff);
    }

    100% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }
}

@keyframes animSpan5 {
    0% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }

    100% {
        filter: drop-shadow(1px 1px 5px #fff);
    }
}

@keyframes animSpan6 {
    0% {
        filter: drop-shadow(1px 1px 5px #fff);
    }

    100% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }
}

@keyframes animSpan7 {
    0% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }

    100% {
        filter: drop-shadow(1px 1px 5px #fff);
    }
}

@keyframes animSpan8 {
    0% {
        filter: drop-shadow(1px 1px 5px #fff);
    }

    100% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }
}

@keyframes animSpan9 {
    0% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }

    100% {
        filter: drop-shadow(1px 1px 5px #fff);
    }
}

@keyframes animSpan10 {
    0% {
        filter: drop-shadow(1px 1px 5px #fff);
    }

    100% {
        box-shadow: 1px 1px 5px blue;
        background-color: aqua;
    }
}
</style>
