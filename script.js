document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const totalLectures = parseInt(document.getElementById('totalLectures').value);
    const totalAbsent = parseInt(document.getElementById('totalAbsent').value);
    const totalDelegation = parseInt(document.getElementById('totalDelegation').value);
  
    const attendancePercentage = ((totalLectures - totalAbsent + totalDelegation) / totalLectures) * 100;
    const bunkedLectures = Math.round(0.1 * totalLectures - totalAbsent + totalDelegation);
  
    let fine = 0;
    if (attendancePercentage < 90) {
      const percentageBelow90 = 90 - attendancePercentage;
      fine = Math.ceil(percentageBelow90) * 400;
    }
  
    document.getElementById('attendancePercentage').textContent = attendancePercentage.toFixed(2) + '%';
    document.getElementById('bunkedLectures').textContent = bunkedLectures;
    document.getElementById('fine').textContent = 'INR ' + fine;
  
    document.getElementById('result').classList.remove('hidden');
  });
  