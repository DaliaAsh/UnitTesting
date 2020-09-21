exports.fromFormat = function (dateString, dateFormat) {
  let str = "";
  let str_splitted = [];
  let result = "";
  let count_M = 0;
  let count_D = 0;
  let count_Y = 0;
  let year;
  let month;
  let day;
  str = dateFormat;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "M") {
      count_M++;
    }
    if (str[i] == "y") {
      count_Y++;
    }
    if (str[i] == "d") {
      count_D++;
    }
  }
  str_splitted = dateString.split("/");
  let M_index = str.indexOf("M");
  let Y_index = str.indexOf("Y");
  Y_index === -1 ? (Y_index = str.indexOf("y")) : (Y_index = Y_index);
  let D_index = str.indexOf("D");
  D_index === -1 ? (D_index = str.indexOf("d")) : (D_index = D_index);
  if (M_index < D_index && D_index < Y_index) {
    switch (count_M) {
      case 1:
        month = Number(str_splitted[0]);
        break;
      case 2:
        month = Number(str_splitted[0]);
        break;
      case 3:
        month = Number(str_splitted[0]);
        break;
      case 4:
        month = Number(str_splitted[0]);
        break;
    }

    switch (count_D) {
      case 1:
        day = Number(str_splitted[1]);
        break;

      case 2:
        day = Number(str_splitted[1]);
        break;
    }
    switch (count_Y) {
      case 1:
        year = Number(str_splitted[2]);
        break;
      case 2:
        year = Number(str_splitted[2]);
        break;
    }

    result = new Date(year, month, day).toString();
  }

  return result;
};
exports.format = function (dateObject, outputFormat) {
  let result = "";
  let date = dateObject;
  let month;
  let day;
  let year;
  let hours;
  let minutes;
  let seconds;
  let AM_PM;
  let count_M = 0;
  let count_D = 0;
  let count_Y = 0;
  let count_h = 0;
  let count_m = 0;
  let count_s = 0;
  let count_a = 0;
  let count_A = 0;
  let str = outputFormat;
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let months_full_name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "M") {
      count_M++;
    }
    if (str[i] === "y" || str[i] === "Y") {
      count_Y++;
    }
    if (str[i] === "d" || str[i] === "D") {
      count_D++;
    }
    if (str[i] === "H") {
      count_h++;
    }
    if (str[i] === "m") {
      count_m++;
    }
    if (str[i] === "s" || str[i] === "S") {
      count_s++;
    }
    if (str[i] === "a") {
      count_a++;
    }
    if (str[i] === "A") {
      count_A++;
    }
  }
  let M_index = str.indexOf("M");
  let Y_index = str.indexOf("Y");
  Y_index === -1 ? (Y_index = str.indexOf("y")) : (Y_index = Y_index);
  let D_index = str.indexOf("D");
  D_index === -1 ? (D_index = str.indexOf("d")) : (D_index = D_index);
  let h_index = str.indexOf("H");
  let m_index = str.indexOf("m");
  let s_index = str.indexOf("s");
  s_index === -1 ? (s_index = str.indexOf("S")) : (s_index = s_index);
  let a_index = str.indexOf("a");
  let A_index = str.indexOf("A");
  if (M_index < D_index && D_index < Y_index) {
    switch (count_M) {
      case 1:
        month = date.getMonth() + 1;
        break;
      case 2:
        month = date.getMonth() + 1;
        if (month < 10) {
          month = "0" + month;
        }
        break;
      case 3:
        month = months[date.getMonth()];

        break;
      case 4:
        month = months_full_name[date.getMonth()];
        break;
    }

    switch (count_D) {
      case 1:
        day = date.getDate();
        break;

      case 2:
        day = date.getDate();
        if (day < 10) {
          day = Number("0" + day);
        }
        break;
    }
    switch (count_Y) {
      case (1, 4):
        year = date.getFullYear();
        break;
      case 2:
        year = date.getFullYear();
        break;
    }
    switch (count_h) {
      case 1:
        hours = date.getHours();
        break;

      case 2:
        hours = date.getHours();
        if (hours < 10) {
          hours = "0" + hours;
        }
        break;
    }
    switch (count_m) {
      case 1:
        minutes = date.getMinutes();
        break;

      case 2:
        minutes = date.getMinutes();
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        break;
    }
    switch (count_s) {
      case 1:
        seconds = date.getSeconds();
        break;

      case 2:
        seconds = date.getSeconds();
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        break;
    }
    switch (count_a) {
      case 1:
        if (hours < 12) {
          AM_PM = "a";
        } else {
          AM_PM = "p";
        }
        break;

      case 2:
        if (hours < 12) {
          AM_PM = "am";
        } else {
          AM_PM = "pm";
        }
        break;
    }
    switch (count_A) {
      case 1:
        if (hours < 12) {
          AM_PM = "A";
        } else {
          AM_PM = "P";
        }
        break;
      case 2:
        if (hours < 12) {
          AM_PM = "AM";
        } else {
          AM_PM = "PM";
        }
        break;
    }
  }

  result =
    month +
    "-" +
    day +
    "/" +
    year +
    (hours ? " " + hours : "") +
    (minutes ? ":" + minutes + "" : "") +
    (seconds ? ":" + seconds : "") +
    (AM_PM ? " " + AM_PM : "");

  return result;
};
exports.add = function (date, amount) {
  let curr_date = date;
  let str = amount;
  let h_index = str.indexOf("h");
  let d_index = str.indexOf("d");
  let arr = Array.from(str);
  let hours;
  let days;
  let days_str;
  let num_days;
  let hours_str;
  let num_hours;
  let days_curr;
  let hours_curr;
  let AM_PM;
  if (h_index > -1) {
    hours = arr.slice(0, h_index);
    hours_str = "";
    hours.map((item) => {
      hours_str += item;
    });
    num_hours = Number(hours_str);

    hours_curr = curr_date.getHours() + num_hours;

    let count_days = 0;
    if (hours_curr > 23) {
      while (hours_curr > 23) {
        hours_curr -= 23;
        count_days++;
      }
    }
    let curr_days_ = curr_date.getDate();
    curr_date.setDate(curr_days_ + count_days);
    curr_date.setHours(hours_curr);
    return (
      curr_date.getMonth() +
      1 +
      "-" +
      curr_date.getDate() +
      "-" +
      curr_date.getFullYear() +
      " " +
      curr_date.getHours()
    );
  } else {
    days = arr.slice(0, d_index);
    days_str = "";
    days.map((item) => {
      days_str += item;
    });
    num_days = Number(days_str);
    days_curr = curr_date.getDate() + num_days;
    let count_months = 0;
    if (days_curr > 31) {
      while (days_curr > 31) {
        days_curr -= 30;
        count_months++;
      }
    }
    curr_date.setDate(days_curr);
    curr_date.setMonth(curr_date.getMonth() + count_months);

    return (
      curr_date.getMonth() +
      1 +
      "-" +
      curr_date.getDate() +
      "-" +
      curr_date.getFullYear() +
      " " +
      curr_date.getHours()
    );
  }
};
