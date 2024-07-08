<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('utilisateurs', function (Blueprint $table) {
            $table->id();
            $table->string("nom");
            $table->string("numéro_téléphone", 15);
            $table->string("email")->unique();
            $table->string("password");
            $table->string("type_utilisateur");
            $table->bigInteger('id_application')->unsigned();
            $table->foreign("id_application")->references("id")->on("applications");
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('utilisateurs');
    }
};
