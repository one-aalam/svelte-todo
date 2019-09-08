<script>
    // import { fetch } from './libs/fetch';
    import Fetch from "./components/Fetch.svelte";
    import TodoItems from './components/TodoItems.svelte'; 

    // var payload = {};
    // var requestInit = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(payload)
    // };
    // fetch(url, requestInit)
    // .then(function(response) {
    //     if (!response.ok) {
    //     throw Error(response.statusText);
    //     }
    //     return response.json();
    // })
    // .then(function(json) {
    //     console.log(json);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // });
</script>
<div>
   <div class="bg-gray-100 pt-24 lg:pt-0">
      <TodoItems />
    </div>
    <!-- <Fetch url="https://jsonplaceholder.typicode.com/todos" let:data>
          <h1>A list of todos</h1>
            <ul>
                {#each data as link}
                <li>{link.title}</li>
                {/each}
            </ul>
    </Fetch> -->
</div>

