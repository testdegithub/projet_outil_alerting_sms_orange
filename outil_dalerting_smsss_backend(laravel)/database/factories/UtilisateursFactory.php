<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\odel=utilisateurs>
 */
class UtilisateursFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "nom" =>"zahir",
            "numéro_téléphone" =>"1232345",
            "email" =>"test@gmail.com",
            "password" =>Hash::make("test"),
            "type_utilisateur" => "admin",
            "id_application" =>11
        ];
    }
}
