console.log('loaded');
function cal_mPS () {
console.log('called');
if($("#FOXM1").prop('checked')) {
     var FOXM1 =3.424;
   }
   else {
     var FOXM1 =0;
   }
   
if($("#CPT1A").prop('checked')) {
     var CPT1A =3.399;
   }
   else {
     var CPT1A =0;
   }
   
if($("#GARS").prop('checked')) {
     var GARS =2.539;
   }
   else {
     var GARS =0;
   }
  
if($("#MARS").prop('checked')) {
     var MARS =2.312;
   }
   else {
     var MARS =0;
   }
   
if($("#UTP23").prop('checked')) {
     var UTP23 =2.311;
   }
   else {
     var UTP23 =0;
   }
   
if($("#ANLN").prop('checked')) {
     var ANLN =2.225;
   }
   else {
     var ANLN =0;
   }
   
if($("#HMGB3").prop('checked')) {
     var HMGB3 =2.202;
   }
   else {
     var HMGB3 =0;
   }
   
if($("#ATP5F1B").prop('checked')) {
     var ATP5F1B =1.934;
   }
   else {
     var ATP5F1B =0;
   }
   
if($("#APOOL").prop('checked')) {
     var APOOL =1.754;
   }
   else {
     var APOOL =0;
   }
   
if($("#CYB561").prop('checked')) {
     var CYB561 =1.594;
   }
   else {
     var CYB561 =0;
   }
   
if($("#GRHL2").prop('checked')) {
     var GRHL2 =1.526;
   }
   else {
     var GRHL2 =0;
   }
   
if($("#ESRP1").prop('checked')) {
     var ESRP1 =1.485;
   }
   else {
     var ESRP1 =0;
   }
   
if($("#EZR").prop('checked')) {
     var EZR =1.372;
   }
   else {
     var EZR =0;
   }
   
if($("#RBBP8").prop('checked')) {
     var RBBP8 =0;
   }
   else {
     var RBBP8 =3.095;
   }
   
if($("#CIRBP").prop('checked')) {
     var CIRBP =0;
   }
   else {
     var CIRBP =3.083;
   }
   
if($("#PTGER3").prop('checked')) {
     var PTGER3 =0;
   }
   else {
     var PTGER3 =2.802;
   }
   
if($("#LAMA3").prop('checked')) {
     var LAMA3 =0;
   }
   else {
     var LAMA3 =2.601;
   }
   
if($("#OARD1").prop('checked')) {
     var OARD1 =0;
   }
   else {
     var OARD1 =2.008;
   }
   
if($("#ANKRD29").prop('checked')) {
     var ANKRD29 =0;
   }
   else {
     var ANKRD29 =1.886;
   }
   
if($("#EGR3").prop('checked')) {
     var EGR3 =0;
   }
   else {
     var EGR3 =1.836;
   }
   
if($("#DIRAS3").prop('checked')) {
     var DIRAS3 =0;
   }
   else {
     var DIRAS3 =1.821;
   }
   
if($("#MITD1").prop('checked')) {
     var MITD1 =0;
   }
   else {
     var MITD1 =1.425;
   }

if($("#LAMB3").prop('checked')) {
     var LAMB3 =0;
   }
   else {
     var LAMB3 =1.425;
   }
   
mPS = FOXM1 + CPT1A + GARS + MARS + UTP23 + ANLN + HMGB3 + ATP5F1B + APOOL + CYB561 + GRHL2 + ESRP1 + EZR + RBBP8 + CIRBP + PTGER3 + LAMA3 + OARD1 + ANKRD29 + EGR3 + DIRAS3 + MITD1 + LAMB3
alert (mPS);
return mPS;
}
