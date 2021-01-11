//global scope
const globalScope = () => ({
    //fetch status
    isLoading: true,
    isError: false,
    pets: [],
    filteredPets: [],
    filterStatus: "all",
    fetchPets(){
        fetch('https://api.adoptapet.com/search/pet_search?key=e41b6bf1618d053c31d524d235j9hj7&geo_range=50&city_or_zip=47374&species=dog&end_number=6&output=json')
        .then(response => response.json())
        .then(response => { // initialize pets
            result = response.pets;
            // add details to pet
            result.forEach(async pet => {
                const res = await fetch(pet.details_url);
                const json = await res.json();
                //add fake adopted data
                this.pets.push({
                    ...pet,
                    details: {
                        ...json.pet,
                        adopted: Math.random() < 0.4,
                        special_needs: json.pet.special_needs || false,
                        act_quickly: Math.random() < 0.4
                    }
                })
            });
            this.filteredPets = this.pets;
            this.isLoading = false; 
            this.isError = false; 
        } )
        .catch(err => { // handle errors
            this.isLoading = false; 
            this.isError = true;
        });
    },
    //filter status
    filterPets(filterStatus){
        const filteredPets = filterStatus !== 'all' ? this.pets.filter(pet => pet.details[filterStatus] == true) : this.pets
        this.filteredPets = [].concat(filteredPets)
        console.log("updated", this.filteredPets)
    }
  })
  //filter scope
  const filterScope = () => ({
    open: false,
    text: "All",
    toggle(){
        this.open = !this.open
    },
    close(text = 'All', $dispatch){
        this.open = false
        this.text = text
        //dispatch filter-change event
        const statusObject = {
            'All': 'all',
            'Act quickly': 'act_quickly',
            'Special needs': 'special_needs',
            'Adopted': 'adopted'
        }
        $dispatch('filter-change', {filterStatus: statusObject[text]})
    }
  })
  //pet scope
  const petScope = () => ({
    //pet info
    name: "",
    breed: "",
    age: "",
    sex: "",
    address: "",
    photoURL: "",
    //pet status
    actQuickly: false,
    specialNeeds: false,
    adopted: false,
    isHeart: false,
    //methods
    heart(){
        this.isHeart = !this.isHeart;
    },
    initPet($el){
        const pet = JSON.parse($el.parentElement.dataset.pet)
        this.name =pet.pet_name
        this.breed =pet.primary_breed
        this.sex =pet.details.sex
        this.address = `${pet.details.addr_city}, ${pet.details.addr_state_code}`
        this.age =pet.details.age
        this.photoURL = pet.large_results_photo_url
        //pet status
        this.adopted = pet.details.adopted
        this.specialNeeds = pet.details.special_needs
        this.actQuickly = pet.details.act_quickly
    },
    setStatusBackgroundColor(){
        if(this.adopted)
            return "bg-blue-default"
        if(this.actQuickly)
            return "bg-lemon-default"
    },
    setStatusText(){
        if(this.adopted)
            return "Adopted"
        if(this.actQuickly)
            return "Act Quickly"
        return "<span>&#8203;</span>"
    },
    showAge(){
        return `${this.sex}, ${this.age}${this.specialNeeds ? "<span class='text-coral-default'>, Special Needs</span>" : ""}`
    }
  })
  //icon scope
  const iconScope = () => ({
    heart: false,
    info: false,
    isHeart: false,
    initIcons($el){
        this.isHeart = $el.parentElement.dataset.heart
    },
    heartHover() {
        this.heart = true
    },
    heartLeave(){
        this.heart = this.isHeart
    },
    infoHover() {
        this.info = true
    },
    infoLeave(){
        this.info = false
    },
    addHeart($dispatch){
        this.isHeart = !this.isHeart
        $dispatch('add-heart');
    }
  })