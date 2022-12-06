function canGiveBlood(Donor, Receiver) {
  ReceiverOPlus = ["O+", "AB+", "B+", "A+"]
  ReceiverBMinus = ["B-", "B+", "AB-", "AB+"]
  ReceiverOMinus = ["A-", "B-", "AB-", "O-", "A+", "B+", "AB+", "O+"]
  ReceiverBPlus = ["B+", "AB+"]
  ReceiverAPlus = ["A+", "AB+"]
  ReceiverAMinus = ["A-", "A+", "AB-", "AB+"]
  ReceiverABPlus = ["AB+"]
  ReceiverABMinus = ["AB-", "AB+"]
  if (((Donor == "A+" && ReceiverAPlus.indexOf(Receiver) !== -1) || 
      (Donor == "A-" && ReceiverAMinus.indexOf(Receiver) !== -1) || 
      (Donor == "B+" && ReceiverBPlus.indexOf(Receiver) !== -1) ||
      (Donor == "B-" && ReceiverBMinus.indexOf(Receiver) !== -1) ||
      (Donor == "O+" && ReceiverOPlus.indexOf(Receiver) !== -1) ||
      (Donor == "O-" && ReceiverOMinus.indexOf(Receiver) !== -1) ||
      (Donor == "AB+" && ReceiverABPlus.indexOf(Receiver) !== -1) ||
      (Donor == "AB-" && ReceiverABMinus.indexOf(Receiver))) == true) {
    console.log("True");
  }
  else {
    console.log("False");
  }
}

canGiveBlood("O+", "A+");
canGiveBlood("A-", "B-");
canGiveBlood("A-", "AB+");
