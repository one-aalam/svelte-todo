<script>
    import { fetch } from './libs/fetch';
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
</div>

