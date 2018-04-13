$(document).ready(function() {
  $.getJSON( "../data/data.json", function(data) {
    console.log(data);
    $(data).each(function(i) {
      if (this.o1.length>0) {$("<div class='respondent'></div>").appendTo("#anketa")};
      if (this.o1.length==0) {$("<div class='respondent neodpovedel'></div>").appendTo("#anketa")};
      $(".respondent").last().append("<img class='portret' src='" + this.f + "'>");
      $(".respondent").last().append("<p class='jmeno'><strong>" + this.j + " " + this.p + "</strong></p>");
      if (this.s=="ANO") {$(".jmeno").last().css("background-color", "green")};
      if (this.s=="NE") {$(".jmeno").last().css("background-color", "red")};
      if (this.s=="NEUTRÁLNÍ") {$(".jmeno").last().css("background-color", "grey")};
      if (this.o1.length>0) {$(".respondent").last().append("<p class='veta'>&bdquo;" + this.o1 + "&ldquo;</p>")};
      if (this.o1.length==0) {$(".respondent").last().append("<p class='veta' style='color:red;'>Bez odpovědi</p>")};
    });

  });
});