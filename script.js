                    function openNav() {
                        document.getElementById("mySidenav").style.width = "100%";
                    }
                    function wideOpen() {
                        document.getElementById("mySidenav").style.width = "250px";
                    }
                    function closeNav() {
                        document.getElementById("mySidenav").style.width = "0";
                    }
                    var dropdown = document.getElementsByClassName("dropdown-btn");
                    var i;

                    for (i = 0; i < dropdown.length; i++) {
                        dropdown[i].addEventListener("click", function() {
                            this.classList.toggle("active");
                            var dropdownContent = this.nextElementSibling;
                            if (dropdownContent.style.display === "block") {
                                dropdownContent.style.display = "none";    
                            } else {
                                dropdownContent.style.display = "block";
                            }
                        });
                    }

                    $(document).ready(function(){
                        $(".dropdown-site1").click(function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            $(".show-site1").slideDown();
                        });
                    });

                    $(document).ready(function(){
                        $(".show-site1").click(function(){
                            $(".show-site1").slideUp();
                        });
                    });

                    $(document).ready(function(){
                        $(".dropdown-site2").click(function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            $(".show-site2").slideDown();
                        });
                    });

                    $(document).ready(function(){
                        $(".show-site2").click(function(){
                            $(".show-site2").slideUp();
                        });
                    });

                    $(document).ready(function(){
                        $(".dropdown-site3").click(function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            $(".show-site3").slideDown();
                        });
                    });

                    $(document).ready(function(){
                        $(".show-site3").click(function(){
                            $(".show-site3").slideUp();
                        });
                    });

                    $(document).ready(function(){
                        $(".dropdown-food1").click(function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            $(".show-food1").slideDown();
                        });
                    });

                    $(document).ready(function(){
                        $(".show-food1").click(function(){
                            $(".show-food1").slideUp();
                        });
                    });

                    $(document).ready(function(){
                        $(".dropdown-food2").click(function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            $(".show-food2").slideDown();
                        });
                    });

                    $(document).ready(function(){
                        $(".show-food2").click(function(){
                            $(".show-food2").slideUp();
                        });
                    });

                    $(document).ready(function(){
                        $(".dropdown-food3").click(function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            $(".show-food3").slideDown();
                        });
                    });

                    $(document).ready(function(){
                        $(".show-food3").click(function(){
                            $(".show-food3").slideUp();
                        });
                    });

                    $(document).ready(function(){
                        $(".dropdown-shopping1").click(function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            $(".show-shopping1").slideDown();
                        });
                    });

                    $(document).ready(function(){
                        $(".show-shopping1").click(function(){
                            $(".show-shopping1").slideUp();
                        });
                    });

                    $(document).ready(function(){
                        $(".dropdown-shopping2").click(function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            $(".show-shopping2").slideDown();
                        });
                    });

                    $(document).ready(function(){
                        $(".show-shopping2").click(function(){
                            $(".show-shopping2").slideUp();
                        });
                    });

                    $(document).ready(function(){
                        $(".dropdown-shopping3").click(function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            $(".show-shopping3").slideDown();
                        });
                    });

                    $(document).ready(function(){
                        $(".show-shopping3").click(function(){
                            $(".show-shopping3").slideUp();
                        });
                    });