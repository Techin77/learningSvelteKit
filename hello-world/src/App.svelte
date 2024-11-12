<script>
    let count = 0;
    function handleClick(event, number) {
        count += number;
    }
    const header = "Hello world";
</script>

<main>
    <h1>{header} count:{count}</h1>
    <button on:click={(event) => handleClick(event, 1)}>Count {count}</button>
</main>

<style>
    main {
        text-align: center;
        padding: 1%;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
