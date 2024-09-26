<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('cin', NumberType::class, [
                'attr' => ['class' => 'form-style', 'placeholder' => 'Votre CIN'],])
            ->add('nom', TextType::class, [
                'attr' => ['class' => 'form-style', 'placeholder' => 'Votre nom'],])
            ->add('prenom', TextType::class, [
                'attr' => ['class' => 'form-style', 'placeholder' => 'Votre prenom'],])
            ->add('dateuser', DateType::class, [
                'attr' => ['class' => 'form-style', 'placeholder' => 'Votre Date de naissance'],])
            ->add('numTel', NumberType::class, [
                'attr' => ['class' => 'form-style', 'placeholder' => 'Votre CIN'],])
            ->add('adresse', TextType::class, [
                'attr' => ['class' => 'form-style', 'placeholder' => 'Votre adresse'],])
            ->add('email', EmailType::class, [
                'attr' => ['class' => 'form-style', 'placeholder' => 'Votre email'],])
            ->add('password', PasswordType::class, [
                'attr' => ['class' => 'form-style', 'placeholder' => 'Votre password'],])
            ->add('image', FileType::class, [
                'attr' => ['class' => 'form-style', 'placeholder' => 'Votre image'],])
            ->add('Ajouter', SubmitType::class, [
                'attr' => ['class' => 'submitbtn mt-2'],])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
