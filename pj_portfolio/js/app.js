$(document).ready(function () {
    let filter = $("[data-filter]")
    filter.click(function (e) { 
        e.preventDefault();

        let cat = $(e.target).data("filter");
        if (cat =="all") {
            $("[data-cat]").removeClass ("hide")
        } else {

            $("[data-cat]").each(function () { 
           
                let workCat = $(this).data("cat");

                if (workCat != cat) {
                    $(this).addClass ("hide")
                } else {
                    $(this).removeClass ("hide")
                }
    
            });
        }   
    });


    $(".burger").on ("click", function () { 
        $(this).toggleClass("active");
        $(".menu__nav").toggleClass("active")
        $("body").toggleClass("lock")
     })
});