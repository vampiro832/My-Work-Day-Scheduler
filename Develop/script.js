
$(document).ready(function () {
  // let saveButton = $('saveBtn')

  $('.saveBtn').on('click', function () {
   let desc =  $(this).siblings('.description').val();
   var time = $(this).parent().attr('id');
    localStorage.setItem(time, desc);
   });

  function timeUpdater() {
    let time = dayjs().hour();

    $('.time-block').each(function () {
      let blockT = parseInt($(this).attr('id').split('-')[1]);

      if (blockT < time) {
        $(this).addClass('past');
      }else if (blockT === time) {
        $(this).removeClass('past');
        $(this).addClass('present');
      }else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
    timeUpdater();
      setInterval(timeUpdater, 3600);

  $('#hr-9 .description').val(localStorage.getItem('hr-9'));
  $('#hr-10 .description').val(localStorage.getItem('hr-10'));
  $('#hr-11 .description').val(localStorage.getItem('hr-11'));
  $('#hr-12 .description').val(localStorage.getItem('hr-12'));
  $('#hr-13 .description').val(localStorage.getItem('hr-13'));
  $('#hr-14 .description').val(localStorage.getItem('hr-14'));
  $('#hr-15 .description').val(localStorage.getItem('hr-15'));
  $('#hr-16 .description').val(localStorage.getItem('hr-16'));
  $('#hr-17 .description').val(localStorage.getItem('hr-17'));

  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
