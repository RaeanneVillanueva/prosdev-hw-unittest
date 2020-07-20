const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
    if (grade <= 100 && grade >= 95) {
      return 'O'
    } else if (grade <= 94.99 && grade >= 90) {
      return 'V'
    } else if (grade <= 89.99 && grade >= 85) {
      return 'G'
    } else if (grade <= 84.99 && grade >= 80) {
      return 'S'
    } else if (grade <= 79.99 && grade >= 75) {
      return 'N'
    } else {
      return 'D'
    }
  },
}

module.exports = functions
