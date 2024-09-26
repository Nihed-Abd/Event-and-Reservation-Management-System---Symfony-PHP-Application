<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Reservation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $idRes;

    #[ORM\Column]

    private ?int $nbPlace;

    #[ORM\Column(length:255)]

    private ?string $statusRes;


    #[ORM\ManyToOne(targetEntity: User::class)]

    private ?User $idClient;

    #[ORM\ManyToOne(targetEntity: Evenement::class)]

    private ?Evenement $idEvent;

    public function getIdRes(): ?int
    {
        return $this->idRes;
    }

    public function setIdRes(?int $idRes): void
    {
        $this->idRes = $idRes;
    }

    public function getNbPlace(): ?int
    {
        return $this->nbPlace;
    }

    public function setNbPlace(?int $nbPlace): void
    {
        $this->nbPlace = $nbPlace;
    }

    public function getStatusRes(): ?string
    {
        return $this->statusRes;
    }

    public function setStatusRes(?string $statusRes): void
    {
        $this->statusRes = $statusRes;
    }

    public function getIdClient(): ?User
    {
        return $this->idClient;
    }

    public function setIdClient(?User $idClient): void
    {
        $this->idClient = $idClient;
    }

    public function getIdEvent(): ?Evenement
    {
        return $this->idEvent;
    }

    public function setIdEvent(?Evenement $idEvent): void
    {
        $this->idEvent = $idEvent;
    }


}
