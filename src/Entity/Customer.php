<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]

class Customer
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $customerId;

    #[ORM\Column]
    private ?int $prodId;

    #[ORM\Column(length:255)]

    private ?string $marqueProduit;

    #[ORM\Column]

    private ?float $prixProduit;

    #[ORM\Column]

    private ?int $quantite;

    public function getCustomerId(): ?int
    {
        return $this->customerId;
    }

    public function setCustomerId(?int $customerId): void
    {
        $this->customerId = $customerId;
    }

    public function getProdId(): ?int
    {
        return $this->prodId;
    }

    public function setProdId(?int $prodId): void
    {
        $this->prodId = $prodId;
    }

    public function getMarqueProduit(): ?string
    {
        return $this->marqueProduit;
    }

    public function setMarqueProduit(?string $marqueProduit): void
    {
        $this->marqueProduit = $marqueProduit;
    }

    public function getPrixProduit(): ?float
    {
        return $this->prixProduit;
    }

    public function setPrixProduit(?float $prixProduit): void
    {
        $this->prixProduit = $prixProduit;
    }

    public function getQuantite(): ?int
    {
        return $this->quantite;
    }

    public function setQuantite(?int $quantite): void
    {
        $this->quantite = $quantite;
    }


}
