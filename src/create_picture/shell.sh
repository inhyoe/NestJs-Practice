#!/bin/zsh

cd /Users/changhoon/PycharmProjects/stable_get_setting/ml-stable-diffusion

# shellcheck disable=SC2030
VAR1=$1 #this is User
VAR2=$2 #this is suggested word
VAR3=${VAR2// /_}."93.final.png"

#echo $VAR3
#abc+".93.final.png"
#echo str
echo $VAR1
echo $VAR3
#echo $1
#echo $VAR3"93.final.png"

#echo "A_digital_illustration_of_a_steampunk_library_with_clockwork_machines,_4k,_.93.final" | awk '{print length($0)}'

    swift run StableDiffusionSample --resource-path models/coreml-stable-diffusion-v1-4_original_compiled --compute-units all "$2"

if [ ! -d /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/public/images/$1 ];then
    mkdir /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/public/images/$1
    cp /Users/changhoon/PycharmProjects/stable_get_setting/ml-stable-diffusion/$VAR3 /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/public/images/$1/$VAR3
else
    cp /Users/changhoon/PycharmProjects/stable_get_setting/ml-stable-diffusion/$VAR3 /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/public/images/$1/$VAR3
fi

#cp /Users/changhoon/PycharmProjects/stable_get_setting/ml-stable-diffusion/$VAR3 /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/resources/Data/$VAR1


#cp /Users/changhoon/PycharmProjects/stable_get_setting/ml-stable-diffusion/$VAR3 /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/resources/Data/



