document.getElementById("item1").onclick = function() {
    window.open("https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto","_blank");
   };

   document.getElementById("item2").onclick = function() {
    window.open("https://kimetsu-no-yaiba.fandom.com/wiki/Kimetsu_no_Yaiba_Wiki","_blank");
   };

   document.getElementById("item3").onclick = function() {
    window.open("https://dragonball.fandom.com/pt-br/wiki/Dragon_Ball_Wiki","_blank");
   };

   document.getElementById("item4").onclick = function() {
    window.open("https://zatchbell.fandom.com/wiki/Main_Page","_blank");
   };

   document.getElementById("item6").onclick = function() {
    window.open("https://onepunchman.fandom.com/pt-br/wiki/P%C3%A1gina_principal","_blank");
   };

   document.getElementById("item7").onclick = function() {
    window.open("https://bleach.fandom.com/pt-br/wiki/Bleach_Wiki","_blank");
   };

   /*Grid menor*/

   document.getElementById("itemMenor1").onclick = function() {
    window.open("https://pokemon.fandom.com/pt-br/wiki/Pok%C3%A9P%C3%A9dia","_blank");
   };

   document.getElementById("itemMenor2").onclick = function() {
    window.open("https://nanatsu-no-taizai.fandom.com/pt-br/wiki/Nanatsu_no_Taizai_Wiki","_blank");
   };

   document.getElementById("itemMenor3").onclick = function() {
    window.open("https://attackontitan.fandom.com/wiki/Attack_on_Titan_Wiki","_blank");
   };

   document.getElementById("itemMenor4").onclick = function() {
    window.open("https://avatar.fandom.com/pt-br/wiki/Avatar:_A_Lenda_de_Aang","_blank");
   };

   const elemsTooltip = document.querySelectorAll(".tooltipped");
   const instanceTooltip = M.Tooltip.init(elemsTooltip, {
    html: "Deu certo",
    position: "bottom"
   });

