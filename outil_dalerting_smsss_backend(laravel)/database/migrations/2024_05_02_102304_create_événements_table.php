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
        Schema::create('événements', function (Blueprint $table) {
            $table->id();
            $table->string("description");
            $table->bigInteger('id_application')->unsigned();
            $table->foreign("id_application")->references("id")->on("applications");
            $table->string("alerter");
            $table->string("admin");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('événements');
    }
};
