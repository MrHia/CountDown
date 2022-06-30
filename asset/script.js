
// Set the date we're counting down to
var countDownDate = new Date("Jul 7, 2022 07:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("CountDown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("CountDown").innerHTML = "EXPIRED";
    }
}, 1000);

var button1 = document.getElementById("content");
var div = document.getElementById('content');
var ContentData =["Mua thức ăn có thể không cần đến Toán nâng cao, nhưng học tốt Toán nâng cao sẽ quyết định việc bạn mua thức ăn ở đâu",
"Ngủ dậy muộn thì phí mất cả ngày. Tuổi thanh niên mà không học thì phí mất cả cuộc đời.",
"Điều đau đớn nhất không phải là bạn đã thất bại, mà là vốn dĩ bạn có thể thành công",
"Thứ chênh lệch ít nhất giữa con người với con người là chỉ số thông minh, thứ chênh lệch lớn nhất là lòng kiên trì",
"Hãy học khi người khác ngủ, lao động khi người khác lười nhác, chuẩn bị khi người khác chơi bời và có giấc mơ khi người khác chỉ ao ước",
"Lúc thấy việc không học hỏi, khi thi thố mới hối hận",
" Thi cử luôn không có tính công bằng, lợi thế luôn dành cho những ai chịu học, nó đã luôn là như vậy bao đời nay",
"Nghị lực và bền bỉ có thể chinh phục mọi thứ"];
var Number = ContentData.length;
var Numberrandom = Math.floor(Math.random() * Number);
div.innerHTML = ContentData[Numberrandom];


button1.onclick = function () {
	Numberrandom = Math.floor(Math.random() * Number);
    div.innerHTML = ContentData[Numberrandom];
};