export const tableBody = document.querySelector("#email-table");

export const loadTableData = (items) => {
  items.forEach((item) => {
    let row = tableBody.insertRow();
    let subject = row.insertCell(0);
    subject.textContent = item.subject;
    let sender = row.insertCell(1);
    sender.textContent = item.sender;
    let received = row.insertCell(2);
    received.textContent = item.received;
  });
};

export const showEmail = (selected, arr) => {
  const textArea = document.getElementById("email-content");
  for (let i = 0; i < arr.length; i++) {
    if (i === selected - 1) {
      textArea.value = arr[i].mailContent;
    }
  }
};
