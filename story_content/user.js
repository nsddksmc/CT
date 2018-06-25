function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RdsSLDxW1G":
        Script1();
        break;
      case "60lRCxI72Sq":
        Script2();
        break;
      case "5naDBtSKiLM":
        Script3();
        break;
      case "65idKCuCwgN":
        Script4();
        break;
      case "6rPsZHOmT0a":
        Script5();
        break;
      case "69eqe7i25ce":
        Script6();
        break;
      case "5w2wBrtpmV1":
        Script7();
        break;
      case "6BeKXbf0wjr":
        Script8();
        break;
      case "6Rz1r133AhI":
        Script9();
        break;
      case "6T71akzXru1":
        Script10();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script9()
{
  $("#tab-customlink").show();
}

function Script10()
{
  window.print();
}

