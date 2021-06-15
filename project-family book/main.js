var images = ["download.jfif", "download(1).jfif"]
var name=["Asim Kumar Roy", "Dulali Podder Roy"]

var i = 0;
function update(){
    i++
    var number_of_family_members_in_array = 2
    if(i > number_of_family_members_in_array)
    {
        i=0;
    }
    var updatedImage = Image[i];
    var updatedName = Name[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

    
}