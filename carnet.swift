import Foundation

class t_note_student{
var note: [ String: Int]
init(){
}
init(_materie: String, _nota: Int){
note = [materie: nota]
}
deinit{
note = [:]
}
func adauga(_materie: String, _nota: Int){
note[materie] = nota
}
func tipareste_carnet(){
for(materie, nota in note{
print("Nota la materia \(materie) este \(nota)")
}
}
}
var note_student =t_note_student()
note_student.adauga("citire",5)
note_student.adauga("scriere",5)
note_student.tipareste_carnet()