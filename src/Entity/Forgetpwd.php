<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Forgetpwd
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $idRes;

    #[ORM\Column]

    private ?int $code;

    #[ORM\Column(length:255)]

    private ?string$time;

    #[ORM\Column(length:255)]

    private ?string$email;


}
