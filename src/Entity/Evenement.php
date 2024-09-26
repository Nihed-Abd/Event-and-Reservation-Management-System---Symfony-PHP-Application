<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]

class Evenement
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private $idEvent;

    #[ORM\Column(length:255)]

    private ?string $nomEvent;

    #[ORM\Column(length:255)]

    private ?string $lieuEvent;

    #[ORM\Column]

    private ?float $prixEvent;

    #[ORM\Column]

    private ?int $nbParticipation;

    #[ORM\Column]

    private ?\DateTime $dateEvent;

    #[ORM\Column(length:255)]

    private ?string $heureEvent;

    #[ORM\Column(length:255)]

    private ?string $description;

    /**
     * @return mixed
     */
    public function getIdEvent()
    {
        return $this->idEvent;
    }

    /**
     * @param mixed $idEvent
     */
    public function setIdEvent($idEvent): void
    {
        $this->idEvent = $idEvent;
    }

    public function getNomEvent(): ?string
    {
        return $this->nomEvent;
    }

    public function setNomEvent(?string $nomEvent): void
    {
        $this->nomEvent = $nomEvent;
    }

    public function getLieuEvent(): ?string
    {
        return $this->lieuEvent;
    }

    public function setLieuEvent(?string $lieuEvent): void
    {
        $this->lieuEvent = $lieuEvent;
    }

    public function getPrixEvent(): ?float
    {
        return $this->prixEvent;
    }

    public function setPrixEvent(?float $prixEvent): void
    {
        $this->prixEvent = $prixEvent;
    }

    public function getNbParticipation(): ?int
    {
        return $this->nbParticipation;
    }

    public function setNbParticipation(?int $nbParticipation): void
    {
        $this->nbParticipation = $nbParticipation;
    }

    public function getDateEvent(): ?\DateTime
    {
        return $this->dateEvent;
    }

    public function setDateEvent(?\DateTime $dateEvent): void
    {
        $this->dateEvent = $dateEvent;
    }

    public function getHeureEvent(): ?string
    {
        return $this->heureEvent;
    }

    public function setHeureEvent(?string $heureEvent): void
    {
        $this->heureEvent = $heureEvent;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }


}
