const adoptionForm = document.getElementById("adoptionForm");

adoptionForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Generate PDF
  const pdf = new jsPDF();
  const specialElementHandlers = {
    '#editor': function (element, renderer) {
      return true;
    }
  };

  pdf.fromHTML(
    adoptionForm,
    15,
    15,
    {
      'width': 170,
      'elementHandlers': specialElementHandlers
    },
    function (dispose) {
     // Save the PDF
      pdf.save('adoptionForm.pdf');
    }
  );
});