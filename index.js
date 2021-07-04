<script>

$(document).ready(function(){

   $.ajax({
            url: "http://https://rickandmortyapi.com/api/character/",
            type: 'GET',
            dataType: 'json',
            success: function(res) {
               $('#result').html(res)
            }
        });

})

</script>
