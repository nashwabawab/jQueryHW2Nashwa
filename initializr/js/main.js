$(document).ready(function(){
    $('table').DataTable({
      "order": [[ 0, "desc"]]
    });
});


$(document).ready(function() {
    $('table').DataTable( {
        "scrollY":        "150px",
        "scrollCollapse": true,
        "paging":         false
    } );
} );
