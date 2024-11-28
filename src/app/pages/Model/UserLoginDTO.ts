export class UserProfileDTO {
  name: string;
  lastname: string;
  matricule: number;
  phone: string;

  constructor(name: string, lastname: string, matricule: number, phone: string) {
    this.name = name;
    this.lastname = lastname;
    this.matricule = matricule;
    this.phone = phone;
  }
}

export class UserLoginDTO {
  constructor(email: string, password: string) {
    
  }

}
