<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Commande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: "id_commande", type: "integer")]
    private ?int $idCommand;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: "id_client", referencedColumnName: "id")]
    private ?User $idClient;

    #[ORM\Column(length: 255)]
    private ?string $statutCommande;

    #[ORM\Column(type: "float")]
    private ?float $montantTotal;

    #[ORM\ManyToOne(targetEntity: Produit::class)]
    #[ORM\JoinColumn(name: "id_produit", referencedColumnName: "id_produit")]
    private ?Produit $idProduit;

    public function getIdCommand(): ?int
    {
        return $this->idCommand;
    }

    public function setIdCommand(?int $idCommand): void
    {
        $this->idCommand = $idCommand;
    }

    public function getIdClient(): ?User
    {
        return $this->idClient;
    }

    public function setIdClient(?User $idClient): void
    {
        $this->idClient = $idClient;
    }

    public function getStatutCommande(): ?string
    {
        return $this->statutCommande;
    }

    public function setStatutCommande(?string $statutCommande): void
    {
        $this->statutCommande = $statutCommande;
    }

    public function getMontantTotal(): ?float
    {
        return $this->montantTotal;
    }

    public function setMontantTotal(?float $montantTotal): void
    {
        $this->montantTotal = $montantTotal;
    }

    public function getIdProduit(): ?Produit
    {
        return $this->idProduit;
    }

    public function setIdProduit(?Produit $idProduit): void
    {
        $this->idProduit = $idProduit;
    }
}
